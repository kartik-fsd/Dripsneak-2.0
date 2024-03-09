const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");

// Create a router
const router = Router();

const prisma = new PrismaClient();

// API endpoint to fetch reviews and ratings of a specific product
router.get("/reviews/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    // Fetch the product along with its reviews
    const productWithReviews = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        reviewsConnection: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!productWithReviews) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Extract relevant information from the productWithReviews object
    const { id, name, rating, reviewsConnection } = productWithReviews;

    // Extract reviews data
    const reviews = reviewsConnection.map((review) => ({
      reviewId: review.id,
      userId: review.userId,
      userName: `${review.user.firstName} ${review.user.lastName}`,
      rating: review.rating,
      content: review.content,
      createdAt: review.createdAt,
    }));

    // Return the response
    res.status(200).json({
      success: true,
      product: {
        productId: id,
        productName: name,
        productRating: rating,
        reviews,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
