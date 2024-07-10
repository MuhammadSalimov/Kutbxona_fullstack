const courseService = require("../service/courses.service");

class courseController {
  async getAllcourse(req, res) {
    try {
      const courses = await courseService.getAllcourse();
      res.status(200).json(courses);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }

  async createcourse(req, res) {
    try {
      const { name, categoryId } = req.body;
      const course = await courseService.createcourse({ name, categoryId });
      res.json(course);
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  }

  async updatecourse(req, res) {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    try {
      const updatedcourse = await courseService.updatecourse(id, { name, categoryId });
      res.status(200).json(updatedcourse);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }

  async deletecourse(req, res) {
    const { id } = req.params;
    try {
      await courseService.deletecourse(id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
}

module.exports = new courseController();
