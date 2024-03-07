import { PrismaClient, Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET_KEY = "studyRoom";

const prisma = new PrismaClient();

export const Register = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "This email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const userData = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    // Generate and return JWT token
    const tokenData = { userData: { id: userData.id.toString() } };
    const authToken = jwt.sign(tokenData, JWT_SECRET_KEY);
    return res.json({ success: true, authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    // Ensure Prisma client disconnection (optional)
    await prisma.$disconnect();
  }
};
