const categoryService = require("../service/category.service");

class categoryController {

  async getAllcategory(req, res) {
    try {
      const categorys = await categoryService.getAllcategory();
      res.status(200).json(categorys);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
  
  async createcategory(req, res) {
    try {
      const body = req.body;
      const category = await categoryService.createcategory(body);
      res.json(category);
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  }

  async updatecategory(req, res) {
    const { id } = req.params;
    const body = req.body;
    try {
      const updatedcategory = await categoryService.updatecategory(id, body);
      res.status(200).json(updatedcategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }

  async deletecategory(req, res) {
    const { id } = req.params;
    try {
      await categoryService.deletecategory(id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
}

module.exports = new categoryController();
