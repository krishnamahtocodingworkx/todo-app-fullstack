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
      return res.json({
        message: "User not authorized",
        status: 400,
      });
    }
  } catch (error) {
    return res.json({
      message: "Something wrong in verification",
    });
  }
  next();
}
module.exports = { restrictToLoggedInUser };
