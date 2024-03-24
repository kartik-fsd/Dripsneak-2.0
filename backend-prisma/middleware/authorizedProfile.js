const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client"); // Import Prisma Client

const prisma = new PrismaClient(); // Create Prisma client instance
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authorizedUser = async (req, res, next) => {
  const token = req.cookies.authToken;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      // Check if the user has the "SELLER" role (or adjust role check as needed)
      if (decoded && decoded.userId) {
        req.user = decoded;

        try {
          const profile = await prisma.profile.findUnique({
            where: { userId: decoded.userId },
          });

          if (!profile) {
            return res
              .status(401)
              .json({ success: false, message: "User profile not found" }); // Handle missing profile
          }

          req.user.profileId = profile.id;
          next(); // User is logged in with profileId attached
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .json({ success: false, error: "Internal server error" }); // Handle profile retrieval errors
        }
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
