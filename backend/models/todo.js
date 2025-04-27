const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const todo = mongoose.model("todos", todoSchema);
module.exports = todo;
