const usersRouter = require("./router/users.router");
const authRouter = require("./router/auth.router");
const categoryRouter = require("./router/category.router");
const moduleRouter = require("./router/module.router");
const coursesRouter = require("./router/courses.router");
const enrollmentRouter = require("./router/enrollment.router");


module.exports = [
  authRouter,
  usersRouter,
  categoryRouter,
  moduleRouter,
  coursesRouter,
  enrollmentRouter
];
