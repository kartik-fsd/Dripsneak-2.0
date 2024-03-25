const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");

const router = Router();
const prisma = new PrismaClient();

router.get("/wishlist-products", authorizedUser, async (req, res) => {
  const userId = req.user.userId;

  try {
    const wishlistItems = await prisma.wishList.findMany({
      where: { userId },
      include: { product: true }, // Include related product data
    });

    if (!wishlistItems.length) {
      return res
        .status(200)
        .json({ success: true, message: "Wishlist is empty" });
    }

    res.status(200).json({ success: true, wishlistItems });
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
