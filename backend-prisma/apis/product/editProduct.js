const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedSeller = require("../../middleware/authorizeSeller");

// Create a router
const router = Router();

const prisma = new PrismaClient();

// API endpoint for editing a product
router.put("/edit-product/:id", authorizedSeller, async (req, res) => {
  try {
    // Extract product ID from the request parameters
    const productId = req.params.id;

    // Extract seller ID from the user object provided by the middleware
    const sellerId = req.user.userId;

    // Extract product details from the request body
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

    // Find the existing product in the database
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    // Check if the product exists
    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    // Check if the seller is authorized to edit this product
    if (existingProduct.createdById !== sellerId) {
      return res
        .status(403)
        .json({ success: false, error: "Unauthorized to edit" });
    }

    // Update the product with the provided data
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

    // Return success response with the updated product details
    res.status(202).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
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
