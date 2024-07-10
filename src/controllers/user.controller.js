const usersService = require("../service/users.service");

class userController {
  // get user wiht count
  async getUser(req, res) {
    try {
      const message = await usersService.getUser();
      res.json(message);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new userController();
