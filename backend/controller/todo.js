const todo = require("../models/todo");
const { createTodo , updateTodo  } = require("../types");


async function addTodo(req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  // put it to mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
}
async function getAllTodos(req, res) {
  try {
    const todos = await todo.find({});
    res.json({ data: todos });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: error.message });
  }
}

async function updatingTodo(req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  //   await todo.update({ _id: req.body.id }, { completed: true });
  const updatedTodo = await todo.updateOne(
    { _id: req.body.id },
    { $set: { completed: true } }
  );

  res.json({
    msg: "updated todo",
    updatedTodo,
  });
}

async function deleteTodo(req, res) {
  const deletePayload = req.body;
  const parsePayload = updateTodo.safeParse(deletePayload);

  if (!parsePayload.success) {
    res.status({
      msg: "You send the wrong input",
    });
    return;
  }
  const deleted = await todo.findOneAndDelete({ _id: req.body.id });
  if (!deleted) {
    return res.status(400).json({ msg: "todo not found" });
  }
  res.json({
    msg: "Todo deleted successfull",
    deleted,
  });
}

module.exports = { addTodo, updatingTodo, getAllTodos, deleteTodo };
