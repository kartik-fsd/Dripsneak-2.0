const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.post("/reviews/bulk", async (req, res) => {
  try {
    const reviews = req.body;

    // Check if reviews array exists and is not empty
    if (!Array.isArray(reviews) || reviews.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Reviews data is required" });
    }

    // Calculate total rating and number of reviews for each product separately
    const productRatings = {};

    for (const review of reviews) {
      const { productId, rating } = review;

      if (!productRatings[productId]) {
        productRatings[productId] = { totalRating: 0, numReviews: 0 };
      }

      productRatings[productId].totalRating += rating;
      productRatings[productId].numReviews++;
    }

    // Update each product with the new rating and review count
    for (const productId of Object.keys(productRatings)) {
      const { totalRating, numReviews } = productRatings[productId];
      const averageRating = totalRating / numReviews;

      await prisma.product.update({
        where: { id: productId },
        data: {
          rating: parseFloat(averageRating.toFixed(2)),
          reviews: {
            // Increment the existing number of reviews by the number of reviews being added for this product
            increment: numReviews,
          },
        },
      });
    }

    // Create the reviews in bulk
    const createdReviews = await prisma.review.createMany({
      data: reviews,
    });

    res.status(201).json({
      success: true,
      message: "Bulk reviews added successfully",
      reviews: createdReviews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
