const { Router } = require("express");
const categoryCantroller = require("../../controllers/category.controller");
const middleware = require("../../middlewares/middleware");

const categoryRouter = Router();

const route = "/category";

categoryRouter.get(`${route}/`, categoryCantroller.getAllcategory);
categoryRouter.post(`${route}/`, categoryCantroller.createcategory);
categoryRouter.post(`${route}/put`, categoryCantroller.updatecategory);
categoryRouter.post(`${route}/del`, categoryCantroller.deletecategory);

module.exports = categoryRouter;
