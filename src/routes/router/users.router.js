const { Router } = require("express");
const userController = require("../../controllers/user.controller");
const middleware = require("../../middlewares/middleware");
const usersRouter = Router();

const route = "/users"
usersRouter.get(`${route}`, middleware.isAuth , middleware.isAdmin, userController.getUser);

module.exports = usersRouter;
