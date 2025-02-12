const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const PORT = 3000;
// XnzgCWSz6UsfNxYB
app.use(express.json());

// add todo
app.post("/todo", async (req, res) => {
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
});

// fetch todo
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    data: todos,
  });
});

// update todo
app.put("/completed", async (req, res) => {
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
});

app.delete("/delete", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`App Listent at ${PORT}`);
});
