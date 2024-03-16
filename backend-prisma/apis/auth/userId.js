const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/userIds", async (req, res) => {
  try {
    // Retrieve user IDs for users with role "user"
    const users = await prisma.user.findMany({
      where: {
        role: "USER",
      },
      select: {
        id: true,
      },
    });
    const userIds = users.map((user) => user.id);

    res.status(200).json({
      success: true,
      message: "User IDs successfully fetched",
      userIds,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
