const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedUser = require("../../middleware/authorizedUser");

// Create a router
const router = Router();

const prisma = new PrismaClient();

// Create review route with authentication and authorization checks
router.post("/review/:productId", authorizedUser, async (req, res) => {
  //Extract the product id from params
  const { productId } = req.params;

  // Extract seller ID from the user object provided by the middleware
  const userId = req.user.userId;

  // Extract product details from the request body
  const { rating, content, reviewImg } = req.body;

  try {
    // Create a new review for a product
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    const productReview = await prisma.review.create({
      data: {
        productId,
        userId,
        rating,
        content,
        reviewImg,
      },
    });

    // Update product's rating and review count
    const reviews = await prisma.review.findMany({
      where: { productId },
    });

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    // Update the product with the new rating and review count
    await prisma.product.update({
      where: { id: productId },
      data: {
        rating: parseFloat(averageRating.toFixed(2)),
        reviews: reviews.length,
      },
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: "Review submited successfully",
      productReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
