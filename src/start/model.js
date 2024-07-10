require("dotenv/config")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path")
const router = require("../routes/index");
const adminController = require("../admin/admin")
const errorHandler = require("../middlewares/error.handler.midlleware");
const { homeRender } = require("../home/home.render");


const model = (app, express) => {
  // Admin qo'shish funksiyasi
  adminController.addAdmin()

  app.set("views engine", "ejs");
  app.set("views", path.join(__dirname,"..", "views"));


  app.use(express.static(path.join(__dirname,"..", "public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());
  app.use("/api" , [router])
  app.use("/" , homeRender)

  app.use("/*", (req, res) => {
    res.render("error/error.ejs");
  });
  app.use(errorHandler)

};

module.exports = {model};
