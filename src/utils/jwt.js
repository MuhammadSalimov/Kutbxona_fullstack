const jwt = require("jsonwebtoken");
const config = require("config");

const secretKey = config.get("secret_key");

const Jwtsign = (data) => {
  return jwt.sign(data, secretKey, { expiresIn: "1h" });
};

const Jwtverify = async (token) => {
  try {
    return await jwt.verify(token, secretKey, (err, data) => {
      if (err) return err;
      return data;
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  Jwtsign,
  Jwtverify,
};
