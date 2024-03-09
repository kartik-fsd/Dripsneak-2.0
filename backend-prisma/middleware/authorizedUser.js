// Middleware to check if the user is logged in and has the "SELLER" role
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authorizedUser = (req, res, next) => {
  const token = req.cookies.authToken;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      // Check if the user has the "SELLER" role
      if (decoded) {
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

module.exports = authorizedUser;
