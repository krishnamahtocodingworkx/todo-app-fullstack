const express = require("express");
const { addBlog, getAllBlogs, blogDetails } = require("../controller/blogs");

const router = express.Router();

router.post("/add", addBlog);
router.get("/list", getAllBlogs);
router.get("/details/:blogId", blogDetails);

module.exports = router;
