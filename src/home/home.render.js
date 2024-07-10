const { getAllcourse } = require("../service/courses.service");

const homeRender = async (req, res) => {
  const course =await getAllcourse()
  console.log(course);
  res.render("index.ejs" , {course});
};

module.exports = { homeRender}