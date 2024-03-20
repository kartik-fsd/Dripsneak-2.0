const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/price-low-high", async (req, res) => {
  try {
    // Fetch all products
    const products = await prisma.product.findMany({
      orderBy: {
        original_price: "asc",
      },
    });

    res.status(200).json({
      success: true,
      message: "Products successfully fetched",
      bestRated: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
