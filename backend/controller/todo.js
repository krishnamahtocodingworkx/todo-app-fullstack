const todo = require("../models/todo");
const { createTodo, updateTodo } = require("../types");
const jwt = require("jsonwebtoken");
const { ExceptionMessage } = require("../utils/constants");

async function addTodo(req, res) {
  try {
    const { user } = req;
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
      res.status(411).json({
        msg: "You send the wrong inputs",
        success: false,
      });
      return;
    }
    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
      createdBy: user._id,
    });
    if (!newTodo) {
      return res.status(500).json({
        message: "Todo creation failed, Please try again",
        success: false,
      });
    }
    return res.json({
      message: "Todo created successful",
      newTodo,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      success: false,
    });
  }
}
async function getAllTodos(req, res) {
  try {
    const { user } = req;
    const todos = await todo.find({ createdBy: user._id });
    return res.status(200).json({
      success: true,
      message: "Fetched all todos successfully",
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      error: error,
      success: false,
    });
  }
}

async function updatingTodo(req, res) {
  try {
    const updatePayload = req.body;
    const { todoId, title, description, completed } = updatePayload;
    if (!todoId)
      return res.status(400).json({
        message: "Todo id is required",
        success: false,
      });
    if (!title && !description && !completed)
      return res.status(404).json({
        message:
          "At least one field is required (title , description or completed)",
      });
    const updatedTodo = await todo.findByIdAndUpdate(
      todoId,
      {
        ...(title && { title }),
        ...(description && { description }),
        ...(typeof completed === "boolean" && { completed }),
      },
      { new: true }
    );

    res.json({
      message: "Todo updated successful",
      updatedTodo,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      error: error,
      success: false,
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { user } = req;
    const { todoId } = req.body;
    if (!todoId) {
      return res.status(400).json({
        message: "Todo id is required",
        success: false,
      });
    }
    const deleted = await todo.findOneAndDelete({
      _id: todoId,
      createdBy: user._id,
    });
    if (!deleted) {
      return res.status(404).json({ msg: "Failed to delete todo" });
    }

    res.status(200).json({
      msg: "Todo deleted successful",
      deleted,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      error: error,
      success: false,
    });
  }
}

module.exports = { addTodo, updatingTodo, getAllTodos, deleteTodo };
