const express = require("express");
const app = express();

require("./start/run")(app)
require("./start/model").model(app,express)
 