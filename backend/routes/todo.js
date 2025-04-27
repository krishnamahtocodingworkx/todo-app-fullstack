const express = require("express");
const {
  addTodo,
  updatingTodo,
  getAllTodos,
  deleteTodo,
} = require("../controller/todo");

const router = express.Router();

router.post("/add", addTodo);
router.delete("/delete", deleteTodo);
router.get("/todos", getAllTodos);
router.put("/update", updatingTodo);

module.exports = router;
