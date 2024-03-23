const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/productIds", async (req, res) => {
  try {
    // Retrieve user IDs for products
    const products = await prisma.product.findMany({
      select: {
        id: true,
        img: true,
        description: true,
        name: true,
      },
    });
    const productIds = products.map((user) => user.img);
    const productname = products.map((user) => user.name);
    const productDescription = products.map((user) => user.description);

    res.status(200).json({
      success: true,
      message: "Product IDs successfully fetched",
      productIds,
      productname,
      productDescription,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
