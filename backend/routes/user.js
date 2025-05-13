const express = require("express");
const {
  handleUserSignup,
  handleUserLogin,
  handleLogout,
} = require("../controller/user");
const { restrictToLoggedInUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.patch("/logout", restrictToLoggedInUser, handleLogout);

module.exports = router;
