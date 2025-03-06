const express = require("express");
const { getAllUsers } = require("../controller/listing");

const router = express.Router();

router.get('/getUsers',getAllUsers);

module.exports = router;