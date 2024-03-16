const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedSeller = require("../../middleware/authorizeSeller");

// Create a router
const router = Router();

const prisma = new PrismaClient();

// Create product route with authentication and authorization checks
router.post("/create-product", authorizedSeller, async (req, res) => {
  // Extract product details from the request body
  const {
    brand_name,
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
  const createdById = req.user.userId;
  try {
    // Create a new product
    const product = await prisma.product.create({
      data: {
        brand_name,
        name,
        original_price,
        discounted_price,
        category_name,
        is_stock,
        rating: 0,
        reviews: 0,
        description,
        trending,
        size,
        img,
        style,
        createdById,
      },
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: "Product successfully created",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
