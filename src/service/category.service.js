const prisma = require("../utils/connection");

class categoryService {

  async getAllcategory() {
    const categorys = await prisma.category.findMany({
      include:{
        _count: {
          select: { courses: true }
      },
        courses:{select:{name:true , createdAt:true}}
      }
    });
    return categorys;
  }

  async createcategory(body) {
    const category = await prisma.category.create({
      data: { ...body },
    });
    return category;
  }

  async updatecategory(id, data) {
    const updatedcategory = await prisma.category.update({
      where: { id },
      data,
    });
    return updatedcategory;
  }

  async deletecategory(id) {
    await prisma.category.delete({
      where: { id },
    });
  }
}

module.exports = new categoryService();
