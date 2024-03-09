const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedSeller = require("../../middleware/authorizeSeller");

const router = Router();
const prisma = new PrismaClient();

router.put("/edit-product/:id", authorizedSeller, async (req, res) => {
  try {
    const productId = req.params.id;
    const sellerId = req.user.userId;

    const {
      name,
      original_price,
      discounted_price,
      category_name,
      is_stock,
      description,
      trending,
      size,
      img,
      style,
    } = req.body;

    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    if (existingProduct.createdById !== sellerId) {
      return res
        .status(403)
        .json({ success: false, error: "Unauthorized to edit" });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      select: {
        id: false,
        name: true,
        original_price: true,
        discounted_price: true,
        category_name: true,
        is_stock: true,
        rating: false,
        reviews: false,
        description: true,
        trending: true,
        size: true,
        img: true,
        style: true,
        createdById: false,
      },
      data: {
        name,
        original_price,
        discounted_price,
        category_name,
        is_stock,
        description,
        trending,
        size,
        img,
        style,
      },
    });

    res.status(202).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
