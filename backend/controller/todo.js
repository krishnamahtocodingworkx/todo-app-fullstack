const todo = require("../models/todo");
const { createTodo, updateTodo } = require("../types");
const jwt = require("jsonwebtoken");

async function addTodo(req, res) {
  try {
    const token = req.header("Authorization");
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
      res.status(411).json({
        msg: "You send the wrong inputs",
        success:false
      });
      return;
    }
    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
      createdBy: id,
    });
    return res.json({
      msg: "Todo created",
      newTodo,
      success: true,
    });
  } catch (error) {
    return res.json({
      message: "Todo creation failed",
      success:false
    });
  }
}
async function getAllTodos(req, res) {
  try {
    const token = req.headers.authorization;
    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const todos = await todo.find({ createdBy: id });
    res.json({ data: todos });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching todos",
        error: error.message,
        success: false,
      });
  }
}

async function updatingTodo(req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
      success: false,
    });
    return;
  }
  //   await todo.update({ _id: req.body.id }, { completed: true });
  // const getTodo = await todo.updateOne({ _id: req.body.id });
  const getTodo = await todo.findById(req.body.id);
  const { completed } = getTodo;
  const updatedTodo = await todo.findByIdAndUpdate(
    req.body.id,
    {
      completed: !completed,
    },
    { new: true }
  );
  console.log("current status :", getTodo);
  console.log("updated todo ", updatedTodo);
  // const status
  res.json({
    msg: "updated todo",
    updatedTodo,
    success: true,
  });
}

async function deleteTodo(req, res) {
  const token = req.headers.authorization;
  const deletePayload = req.body;
  const parsePayload = updateTodo.safeParse(deletePayload);

  if (!parsePayload.success) {
    res.status({
      msg: "You send the wrong input",
      success: false,
    });
    return;
  }
  const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

  const deleted = await todo.findOneAndDelete({
    _id: req.body.id,
    createdBy: id,
  });
  if (!deleted) {
    return res.status(400).json({ msg: "todo not found" });
  }
  res.json({
    msg: "Todo deleted successful",
    deleted,
    success: true,
  });
}

module.exports = { addTodo, updatingTodo, getAllTodos, deleteTodo };
