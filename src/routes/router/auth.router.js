const { Router } = require("express");
const authCantroller = require("../../auth/auth");
const middleware = require("../../middlewares/middleware");

const authRouter = Router();

const route = "/auth";

authRouter.post(`${route}/register`, authCantroller.register);
authRouter.post(`${route}/login`, authCantroller.login);
authRouter.post(`${route}/verify`, authCantroller.verify);

module.exports = authRouter;
