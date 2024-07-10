const { Router } = require("express");
const enrollmentCantroller = require("../../controllers/enrollment.controller");
const middleware = require("../../middlewares/middleware");

const enrollmentRouter = Router();

const route = "/enrollment";

enrollmentRouter.get(`${route}/`, enrollmentCantroller.getAllenrollment);
enrollmentRouter.post(`${route}/`, enrollmentCantroller.createenrollment);
enrollmentRouter.post(`${route}/put`, enrollmentCantroller.updateenrollment);
enrollmentRouter.post(`${route}/del`, enrollmentCantroller.deleteenrollment);

module.exports = enrollmentRouter;