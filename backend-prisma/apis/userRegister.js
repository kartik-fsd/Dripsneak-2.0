const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator"); // Import for validation

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const prisma = new PrismaClient();

const Register = async (req, res) => {
  // Validate user input using express-validator
  const errors = validationResult(req);

  // If validation errors are present
  if (!errors.isEmpty()) {
    // Format validation errors in a more structured way
    const formattedErrors = errors.array().reduce((acc, error) => {
      // Create an array for each field if it doesn't exist
      if (!acc[error.param]) {
        acc[error.param] = [];
      }

      // Push the error message to the field's array
      acc[error.param].push(error.msg);
      return acc;
    }, {});

    // Return a 400 Bad Request status with formatted validation errors
    return res.status(400).json({ errors: formattedErrors });
  }

  try {
    const { email, firstName, lastName, password, role } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10); // Generate salt for password hashing
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        role,
        password: hashedPassword,
      },
    });

    // Generate and return JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, {
      expiresIn: "1h", // Set token expiration time
    });
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure flag in production
      sameSite: "lax", // Consider "lax" for wider compatibility
      maxAge: 1000 * 60 * 60 * 24 * 7, // One week in milliseconds (optional)
    });

    // Return a minimal success response
    return res
      .status(201)
      .json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Internal server error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { Register };
