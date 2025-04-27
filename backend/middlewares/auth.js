const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/user");
dotenv.config();

async function restrictToLoggedInUser(req, res, next) {
  try {
    // const token = req.header("Authorization");
    const token = req.headers.authorization;
    if (!token) {
      return res.json({
        message: "Please Login again",
        status: 401,
      });
    }
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const user = await User.findOne({ _id: verified.id });
    if (!user) {
      return res.status(404).json({
        message: "User not authorized",
        status: 404,
      });
    }
    req.user = user;
  } catch (error) {
    return res.status(500).json({
      message: "Something wrong in verification",
    });
  }
  next();
}
module.exports = { restrictToLoggedInUser };
