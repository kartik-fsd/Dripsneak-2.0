const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");
// Create a router
const router = Router();

const prisma = new PrismaClient();

router.put("/edit-profile", authorizedUser, async (req, res) => {
  const userId = req.user.userId;

  const {
    firstName,
    lastName,
    email,
    profileImg,
    dateOfBirth,
    shippingAddress,
    billingAddress,
    pincode,
  } = req.body;

  try {
    let profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile)
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });

    const updateProfile = await prisma.profile.update({
      where: { userId },
      select: {
        id: false,
        userId: false,
        billingAddress: true,
        shippingAddress: true,
        dateOfBirth: true,
        pincode: true,
      },
      data: {
        profileImg,
        dateOfBirth,
        shippingAddress,
        billingAddress,
        pincode,
      },
    });
    const updateUser = await prisma.user.update({
      where: { id: userId },
      select: {
        id: false,
        firstName: true,
        lastName: true,
        password: false,
        email: true,
      },
      data: {
        firstName,
        lastName,
        email,
      },
    });
    // Return success response with the updated product details
    res.status(202).json({
      success: true,
      message: "Profile updated successfully",
      profile: {
        updateUser,
        updateProfile,
      },
    });
  } catch (error) {
    // Handle errors and return an internal server error response
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  } finally {
    // Disconnect the Prisma client after the operation
    await prisma.$disconnect();
  }
});
module.exports = router;
