const prisma = require("../utils/connection");
const { Jwtverify } = require("../utils/jwt");

class MIddleware {
  
  async isAuth(req, res, next) {
    try {
      let token = req.headers.authorization?.split(" ")[1];
      
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const data = await Jwtverify(token);
     if(!data.id) return res.status(400).json({message:"Account topilmadi qaytadan tizimga kiring"})
      const checkUser = await prisma.user.findUnique({where:{id:data.id}})
      if(!checkUser) res.status(400).json("invalid token")
      req.user = data;
      next();
    } catch (error) {
      res.status(500).json({ message: "Enternal server error" });
    }
  }

  async isAdmin(req, res, next) {
    const { isAdmin } = req.user;
    if (!isAdmin) return res.status(400).json({ message: "Permission Denied" });

    next();
  }
}

module.exports = new MIddleware();
