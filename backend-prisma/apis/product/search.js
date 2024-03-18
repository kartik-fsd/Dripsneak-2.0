// productController.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Controller function to handle product search
const searchProducts = async (req, res) => {
  try {
    const { query } = req.query; // Assuming the search query is provided as a query parameter

    // Use Prisma Client to perform the search
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } }, // Search by product name (case-insensitive)
          { brand_name: { contains: query, mode: "insensitive" } }, // Search by brand name (case-insensitive)
        ],
      },
    });

    res.json(products); // Send the search results back to the client
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { searchProducts };
