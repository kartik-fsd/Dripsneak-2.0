const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");
const jwt = require("jsonwebtoken");

// Create a router
const router = Router();

const prisma = new PrismaClient();

router.get("/profile", authorizedUser, async (req, res) => {
  // Extract user ID from the authorized user object
  const userId = req.user.userId;

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
    });

    const userDetails = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    if (!profile && !userDetails) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    // Return only non-sensitive user data in the response
    const sanitizedProfile = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      profileImg: profile.profileImg,
      dateOfBirth: profile?.dateOfBirth, // Convert date to ISO string
      phoneNumber: profile?.phoneNumber,
      shippingAddress: profile?.shippingAddress,
      billingAddress: profile?.billingAddress,
      pincode: profile?.pincode,
    };

    return res.status(200).json({ success: true, profile: sanitizedProfile });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
