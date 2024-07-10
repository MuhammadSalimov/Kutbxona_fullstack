const prisma = require("../utils/connection");

class courseService {
  async getAllcourse() {
    const courses = await prisma.course.findMany({
      include: {
        modules: {
          select: {
            id: true,
            name: true,
            createdAt: true,
          },
        },
      },
    });
    return courses;
  }

  async createcourse(body) {
    const course = await prisma.course.create({
      data: { ...body },
    });
    return course;
  }

  async updatecourse(id, data) {
    const updatedcourse = await prisma.course.update({
      where: { id },
      data,
    });
    return updatedcourse;
  }

  async deletecourse(id) {
    await prisma.course.delete({
      where: { id },
    });
  }
}

module.exports = new courseService();
