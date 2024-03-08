const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator"); // Add for validation

const prisma = new PrismaClient();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const Login = async (req, res) => {
  const errors = validationResult(req); // Validate user input
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    // Generate and set token
    const token = jwt.sign({ userId: existingUser.id }, JWT_SECRET_KEY, {
      expiresIn: "1h", // Set token expiration
    });
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set in production
      sameSite: "lax", // Consider "lax" for moderate protection
    });

    // Return only success status and message
    return res
      .status(202)
      .json({ success: true, message: `Logged in successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { Login };
