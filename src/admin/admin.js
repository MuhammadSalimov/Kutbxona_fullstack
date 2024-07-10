
const prisma = require("../utils/connection");
class adminController {

  async addAdmin() {

    const body = {
      fullname: "admin",
      email: "admin@gmail.com",
      password: "$2b$10$tjxCGYmsnuEr/5NjmkqzH.dNHgPGgnVsIWPJ0fcilIyAH4Mmg/5aO",
      isAdmin: true,
    };

    try {
      const checkAdmin = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
      if (!checkAdmin) {
        await prisma.user.create({ data: { ...body } });
        console.log("Admin created");
      }
    } catch (error) {
      console.error("Error adding admin:", error);
    }
  }

}

module.exports = new adminController();
