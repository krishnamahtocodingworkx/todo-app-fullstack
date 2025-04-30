const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  conclusion: String,
  imageUrl: String,
  author: String,
});

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
