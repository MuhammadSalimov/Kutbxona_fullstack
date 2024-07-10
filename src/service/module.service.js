const prisma = require("../utils/connection");

class moduleService {
  
  async getAllmodule() {
    const modules = await prisma.module.findMany();
    return modules;
  }

  async createmodule(body) {
    const module = await prisma.module.create({
      data: { ...body },
    });
    return module;
  }

  async updatemodule(id, data) {
    const updatedmodule = await prisma.module.update({
      where: { id },
      data,
    });
    return updatedmodule;
  }

  async deletemodule(id) {
    await prisma.module.delete({
      where: { id },
    });
  }
}

module.exports = new moduleService();
