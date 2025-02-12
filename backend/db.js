const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://krishnamahto:XnzgCWSz6UsfNxYB@cluster0.z6bzh.mongodb.net/"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {todo}