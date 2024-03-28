const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");
const jwt = require("jsonwebtoken");
// Create a router
const router = Router();

const prisma = new PrismaClient();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
router.post("/add-profile", authorizedUser, async (req, res) => {
  const { profileImg, dateOfBirth, shippingAddress, billingAddress, pincode } =
    req.body;

  // Extract seller ID from the user object provided by the middleware
  const userId = req.user.userId;
  try {
    const profile = await prisma.profile.create({
      data: {
        userId,
        profileImg,
        dateOfBirth: new Date(dateOfBirth),
        shippingAddress,
        billingAddress,
        pincode: parseInt(pincode),
      },
    });
    // Generate and return JWT token
    const token = jwt.sign({ profileId: profile.id }, JWT_SECRET_KEY, {
      expiresIn: "1h", // Set token expiration time
    });
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure flag in production
      sameSite: "lax", // Consider "lax" for wider compatibility
      maxAge: 1000 * 60 * 60 * 24 * 7, // One week in milliseconds (optional)
    });

    // Return a minimal success response
    return res
      .status(202)
      .json({ success: true, message: "Profile saved successfully", token });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});
module.exports = router;
