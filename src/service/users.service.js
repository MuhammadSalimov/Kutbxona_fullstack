const prisma = require("../utils/connection");

class userService {
  async getUser() {
    const users = await prisma.user.findMany({
      where: { isAdmin: false },
      select: {
        id: true,
        fullname: true,
        email: true,
        isAdmin: true,
        enrollments: {
          select: {
            id: true,
            courseId: true,
            createdAt: true,
          },
        },
      },
    });
    const userCount = await prisma.user.count({
      where: { isAdmin: false },
    });
    return { count: userCount, users: users };
  }
}

module.exports = new userService();
