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

// const mongoose = require("mongoose");

// const todoSchema = new mongoose.Schema({
//   title: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model("Todo", todoSchema); // Capitalized name is a convention

// module.exports = Todo; // Ensure you export the model
