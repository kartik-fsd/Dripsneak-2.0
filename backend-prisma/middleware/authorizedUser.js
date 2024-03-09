// Middleware to check if the user is logged in
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authorizedUser = (req, res, next) => {
  const token = req.cookies.authToken;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      // Check if the user has the "SELLER" role
      if (decoded && decoded.userId) {
        req.user = decoded; // Set the user information in the request object
        next(); // User is logged in
      } else {
        res.status(403).json({ message: "Permission denied" });
      }
    } catch (error) {
      // Token verification failed
      if (error.name === "TokenExpiredError") {
        res.status(401).json({ message: "Token expired" });
      } else {
        res.status(401).json({ message: "Invalid token" });
      }
    }
  } else {
    // No token provided
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authorizedUser;
