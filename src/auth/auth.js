const bcrypt = require("bcrypt");
const authService = require("../service/auth.service");
const { Jwtsign } = require("../utils/jwt");
const otpGenerator = require("otp-generator");
const prisma = require("../utils/connection");
const sendMail = require("../utils/mail");


class authCantroller {
  
  async register(req, res, next) {
    try {
      const body = req.body;
      const checkUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
      if (checkUser)
        return res.status(409).json({ message: "username already exist" });

      // const message = await authService.register(body);
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      await sendMail(body.email, otp);
 
      

      res.status(200).json({ data: req.body });
    } catch (error) {
      res.status(500).json({ message: error.message });
    } 
  }

  async login(req, res, next) {
    try {
      const body = req.body;

      const checkUser = await authService.login(body);
      if (!checkUser)
        return res.status(404).json({ message: "User not found" });

      const checkPass = await bcrypt.compare(body.password, checkUser.password);
      if (!checkPass)
        return res.status(401).json({ message: "Invalid password" });

      let token = Jwtsign({ id: checkUser.id, isAdmin: checkUser.isAdmin });
      res.cookie("access_token", token, { httpOnly: true });

      res.status(200).json({ message: "successfuly logged", token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }

  async verify(req, res, next) {
    try {
      const { email, password, code, fullname } = req.body;


    
     
      if (code) {
        return res.status(400).json({ message: "Invalid otp code" });
      }

      const checkUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (checkUser) {
        return res.status(409).json({ message: "username already exist" });
      }

      const hashPass = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: { email, fullname, password: hashPass },
      });

      const token = Jwtsign({ id: user.id, isAdmin: user.isAdmin });
      res.json({ message: "account verified", data: token });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new authCantroller();
