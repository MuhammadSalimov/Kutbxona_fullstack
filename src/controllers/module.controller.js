const moduleService = require("../service/module.service");

class moduleController {

  async getAllmodule(req, res) {
    try {
      const modules = await moduleService.getAllmodule();
      res.status(200).json(modules);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
  
  async createmodule(req, res) {
    try {
      const { name, courseId } = req.body;
      const module = await moduleService.createmodule({name,courseId});
      res.json(module);
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  }

  async updatemodule(req, res) {
    const { id } = req.params;
    const { name, courseId } = req.body;
    try {
      const updatedmodule = await moduleService.updatemodule(id, { name, courseId });
      res.status(200).json(updatedmodule);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }

  async deletemodule(req, res) {
    const { id } = req.params;
    try {
      await moduleService.deletemodule(id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
}

module.exports = new moduleController();