const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");

const prisma = new PrismaClient();
const router = Router();

router.post("/wishlist", authorizedUser, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId;

    // Check if the item already exists in the wishlist
    const existingItem = await prisma.wishList.findUnique({
      where: {
        userId,
        productId,
      },
    });

    if (existingItem) {
      return res
        .status(400)
        .json({ success: false, message: "Item already exists in wishlist" });
    }

    await prisma.wishList.create({
      data: {
        userId,
        productId,
      },
    });

    return res
      .status(202)
      .json({ success: true, message: "Added to your wishlist" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
