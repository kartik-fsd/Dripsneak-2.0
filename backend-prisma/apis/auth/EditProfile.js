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
    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });

    const updateData = {
      profileImg,
      dateOfBirth,
      shippingAddress,
      billingAddress,
      pincode,
    };

    if (!profile) {
      // Create profile if not exists
      profile = await prisma.profile.create({
        data: {
          ...updateData,
          user: {
            connect: { id: userId },
          },
        },
      });
    } else {
      // Update profile if exists
      profile = await prisma.profile.update({
        where: {
          userId,
        },
        data: updateData,
      });
    }

    // Update user details
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName,
        lastName,
        email,
      },
    });

    // Return success response with the updated user profile
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      profile,
      user: updatedUser,
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
