const express = require("express");
const {
  addTodo,
  updatingTodo,
  getAllTodos,
  deleteTodo,
} = require("../controller/todo");

const router = express.Router();

router.post("/todo", addTodo);
router.delete("/delete", deleteTodo);
router.get("/todos", getAllTodos);
router.put("/completed", updatingTodo);

module.exports = router;
