const enrollmentService = require("../service/enrollment.service");

class enrollmentController {
  async getAllenrollment(req, res) {
    try {
      const enrollments = await enrollmentService.getAllenrollment();
      res.status(200).json(enrollments);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }

  async createenrollment(req, res) {
    try {
      const { userId, courseId } = req.body;
      const enrollment = await enrollmentService.createenrollment({
        userId,
        courseId,
      });
      res.json(enrollment);
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  }

  async updateenrollment(req, res) {
    const { id } = req.params;
    const { userId, courseId } = req.body;
    try {
      const updatedenrollment = await enrollmentService.updateenrollment(id, {
        userId,
        courseId,
      });
      res.status(200).json(updatedenrollment);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }

  async deleteenrollment(req, res) {
    const { id } = req.params;
    try {
      await enrollmentService.deleteenrollment(id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
}

module.exports = new enrollmentController();
