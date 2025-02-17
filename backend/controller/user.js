const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser, getUser } = require("../service/auth");
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  console.log("into user signup");
  await User.create({
    name,
    email,
    password,
  });

  res.json({
    msg: "user add successfull",
  });
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    res.json({
      msg: "User not exits",
      status: 404,
    });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);

  res.json({
    msg: "login successfull",
    user,
  });
}
module.exports = { handleUserSignup, handleUserLogin };
