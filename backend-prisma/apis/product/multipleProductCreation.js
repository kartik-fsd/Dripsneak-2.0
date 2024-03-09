const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedSeller = require("../../middleware/authorizeSeller");

// Create a router
const router = Router();

const prisma = new PrismaClient();

// Create products route with authentication and authorization checks
router.post("/create-products", authorizedSeller, async (req, res) => {
  // Extract product details from the request body
  const productsData = req.body;
  try {
    // Create multiple products using createMany
    const createdProducts = await prisma.product.createMany({
      data: productsData.map((product) => ({
        ...product,
        createdById: req.user.userId,
      })),
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: "Products successfully created",
      products: createdProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
