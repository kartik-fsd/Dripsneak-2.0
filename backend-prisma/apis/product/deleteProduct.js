const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const authorizedSeller = require("../../middleware/authorizeSeller");

// Create a router
const router = Router();

const prisma = new PrismaClient();

// Delete product route with authentication and authorization
router.delete("/delete-product/:id", authorizedSeller, async (req, res) => {
  try {
    const productId = req.params.id;
    const sellerId = req.user.userId;

    // find the product
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    // check if the product exist ,verifies if the seller making the request created the product
    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (existingProduct.createdById !== sellerId) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }
    // delete the product If authorized, the product is deleted using prisma.product.delete.
    await prisma.product.delete({
      where: { id: productId },
    });

    // send the status and message
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    //Catches potential errors during the process and sends a 500 Internal Server Error response.
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    //Disconnects from the Prisma client after processing the request.
    await prisma.$disconnect();
  }
});

module.exports = router;
