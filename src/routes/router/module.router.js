const { Router } = require("express");
const moduleCantroller = require("../../controllers/module.controller");
const middleware = require("../../middlewares/middleware");

const moduleRouter = Router();

const route = "/module";

moduleRouter.get(`${route}/`, moduleCantroller.getAllmodule);
moduleRouter.post(`${route}/`, moduleCantroller.createmodule);
moduleRouter.post(`${route}/put`, moduleCantroller.updatemodule);
moduleRouter.post(`${route}/del`, moduleCantroller.deletemodule);

module.exports = moduleRouter;