const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/all-products", async (req, res) => {
  try {
    // Fetch all products
    const products = await prisma.product.findMany();

    res.status(200).json({
      success: true,
      message: "Products successfully fetched",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
