const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/productIds", async (req, res) => {
  try {
    // Retrieve user IDs for products
    const products = await prisma.product.findMany({
      select: {
        id: true,
      },
    });
    const productIds = products.map((product) => product.id);

    const users = await prisma.user.findMany({
      where: {
        role: "USER",
      },
      select: {
        id: true,
      },
    });

    const userIds = users.map((user) => user.id);

    res.status(200).json({
      success: true,
      message: "Product IDs successfully fetched",
      productIds,
      userIds,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
