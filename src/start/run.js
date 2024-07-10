const config = require("config");

const runner = (app) => {
  const PORT = config.get("port") || 8080;

  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

module.exports = runner;
