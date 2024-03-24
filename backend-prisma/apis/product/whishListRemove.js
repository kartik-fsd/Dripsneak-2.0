const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");

const prisma = new PrismaClient();
const router = Router();

router.delete("/wishlist/:itemId", authorizedUser, async (req, res) => {
  try {
    const productId = req.params.itemId;
    const userId = req.user.userId;

    // Find the existing wishlist item (product + user combination)
    const existingWishlistItem = await prisma.wishList.findUnique({
      where: { productId, userId },
    });

    if (!existingWishlistItem) {
      return res
        .status(404)
        .json({ success: false, message: "Wishlist item not found" });
    }

    await prisma.wishList.delete({
      where: { id: existingWishlistItem.id }, // Use the wishlist item ID
    });

    return res
      .status(200)
      .json({ success: true, message: "Sneaker removed from wishlist" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
