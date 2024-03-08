const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
// Create a router
const router = Router();

const prisma = new PrismaClient();

// Middleware to check if the user is logged in and has the "SELLER" role

const authorizedUser = (req, res, next) => {
  const token = req.cookies.authToken;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      // Check if the user has the "SELLER" role
      if (decoded && decoded.role === "SELLER") {
        req.user = decoded; // Set the user information in the request object
        next(); // User is logged in and has the "SELLER" role
      } else {
        // User is not authorized
        res.status(403).json({ message: "Permission denied" });
      }
    } catch (error) {
      // Token verification failed
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    // No token provided
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Create product route with authentication and authorization checks
router.post("/create-product", authorizedUser, async (req, res) => {
  // Extract product details from the request body
  const {
    name,
    original_price,
    discounted_price,
    category_name,
    is_stock,
    rating,
    reviews,
    description,
    trending,
    size,
    img,
    style,
  } = req.body;

  try {
    // Create a new product
    const product = await prisma.product.create({
      data: {
        name,
        original_price,
        discounted_price,
        category_name,
        is_stock,
        rating,
        reviews,
        description,
        trending,
        size,
        img,
        style,
      },
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: "Product successfully created",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
