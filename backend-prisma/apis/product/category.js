const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/category/:category_name", async (req, res) => {
  const { category_name } = req.params;
  try {
    // Retrieve products for the specified category

    const products = await prisma.product.findMany({
      where: {
        category_name: category_name,
      },
    });
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
