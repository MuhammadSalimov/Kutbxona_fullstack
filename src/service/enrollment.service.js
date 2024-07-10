const prisma = require("../utils/connection");

class enrollmentService {
  
  async getAllenrollment() {
    const enrollments = await prisma.enrollment.findMany();
    return enrollments;
  }

  async createenrollment(body) {
    const enrollment = await prisma.enrollment.create({
      data: { ...body },
    });
    return enrollment;
  }

  async updateenrollment(id, data) {
    const updatedenrollment = await prisma.enrollment.update({
      where: { id },
      data,
    });
    return updatedenrollment;
  }

  async deleteenrollment(id) {
    await prisma.enrollment.delete({
      where: { id },
    });
  }
}

module.exports = new enrollmentService();
