const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};
const verifyPassword = async (password, dbPassword) => {
  return bcrypt.compare(password, dbPassword);
};
module.exports = { signToken, verifyToken, hashPassword, verifyPassword };
