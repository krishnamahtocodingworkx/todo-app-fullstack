const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// const { setUser, getUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  const isAlreadyExists = await User.findOne({ email });
  if (isAlreadyExists) {
    return res.json({
      message: "User Already exists",
    });
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  res.json({
    message: "Signup successful",
    data: user,
  });
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      msg: "User not exits",
      status: 400,
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  );

  res.json({
    msg: "login successful",
    updatedUser,
    success:true
  });
}
module.exports = { handleUserSignup, handleUserLogin };
