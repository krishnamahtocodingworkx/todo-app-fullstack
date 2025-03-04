const express = require("express");
const {
  handleProfileDetails,
  editProfileDetails,
} = require("../controller/profile");

const router = express.Router();
router.get("/profile", handleProfileDetails);
router.put("/update-profile", editProfileDetails);

module.exports = router;
