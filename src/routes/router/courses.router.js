const { Router } = require("express");
const coursesCantroller = require("../../controllers/courses.controller");
const middleware = require("../../middlewares/middleware");

const coursesRouter = Router();

const route = "/courses";

coursesRouter.get(`${route}/`, coursesCantroller.getAllcourse);
coursesRouter.post(`${route}/`, coursesCantroller.createcourse);
coursesRouter.post(`${route}/put`, coursesCantroller.updatecourse);
coursesRouter.post(`${route}/del`, coursesCantroller.deletecourse);

module.exports = coursesRouter;