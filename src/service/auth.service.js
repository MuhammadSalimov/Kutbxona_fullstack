const bcrypt = require("bcrypt");
const prisma = require("../utils/connection");

class authService {
  
  async register(body) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;

    const user = await prisma.user.create({
      data: { ...body },
    });

    return await user;
  }

  async login(body) {
    const { email } = body;

    return await prisma.user.findUnique({
      where: { email: email },
    });
  }

}

module.exports = new authService();
