const User = require("../models/user");
const dotenv = require("dotenv");
const { ExceptionMessage, SuccessMessage } = require("../utils/constants");
const {
  signToken,
  hashPassword,
  verifyPassword,
} = require("../utils/commonFunctions");
dotenv.config();

async function handleUserSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({
        message: "All fields are required name,email and password",
        success: false,
      });
    const isAlreadyExists = await User.findOne({ email });
    if (isAlreadyExists) {
      return res.status(400).json({
        message: "User Already exists",
        success: false,
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return res.status(500).json({
        message: ExceptionMessage.SOMETHING_WENT_WRONG,
      });
    }
    const token = signToken({ id: user._id });
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { token },
      { new: true }
    );
    return res.json({
      message: SuccessMessage.SIGNUP_SUCCESSFUL,
      result: updatedUser,
      success: true,
    });
  } catch (error) {
    console.log("error :", error);
    return res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      success: false,
      error,
    });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        message: "email and password are required",
        success: false,
      });
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        msg: "User not exits",
        status: 400,
        success: false,
      });
    }
    const isPasswordCorrect = await verifyPassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.json({
        msg: "Password incorrect",
        status: 404,
        success: false,
      });
    }
    const token = signToken({ id: user._id });
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { token },
      { new: true }
    );

    res.json({
      msg: "login successful",
      updatedUser,
      success: true,
    });
  } catch (error) {
    console.log("error :", error);
    return res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      success: false,
      error,
    });
  }
}
module.exports = { handleUserSignup, handleUserLogin };
