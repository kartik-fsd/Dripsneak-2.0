const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/popular-sneakers", async (req, res) => {
  try {
    // Fetch all products
    const products = await prisma.product.findMany({
      orderBy: [
        { trending: "desc" }, // Sort by trending (sales volume) in descending order
        { rating: "desc" }, // Then sort by rating in descending order
      ],
    });

    res.status(200).json({
      success: true,
      message: "Products successfully fetched",
      popular: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
