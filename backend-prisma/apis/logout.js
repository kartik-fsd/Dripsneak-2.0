// Import necessary modules
const { Router } = require("express");

// Create a router
const router = Router();
// Logout route
router.post("/logout", (req, res) => {
  // Assuming you have stored the token in a cookie named 'authToken'
  res.clearCookie("authToken");
  // You can also send a response indicating successful logout if needed
  res.status(204).end();
});

// Export the router
module.exports = { router };
