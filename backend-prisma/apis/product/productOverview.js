const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/detail", async (req, res) => {
  try {
    const { productId } = req.query; // Assuming the product detail productId is provided as a query parameter
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

    res.status(200).json({
      success: true,
      message: "Products successfully fetched",
      product: existingProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
