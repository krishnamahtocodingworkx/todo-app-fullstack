const express = require("express");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");
const {} = require('./middlewares/auth')

const app = express();
const PORT = 3000;
// XnzgCWSz6UsfNxYB
app.use(express.json());
app.use(cookieParser());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://krishnamahto:XnzgCWSz6UsfNxYB@cluster0.z6bzh.mongodb.net/"
);

app.use("/", userRoute);
app.use("/", todoRoute);

app.listen(PORT, () => {
  console.log(`App Listent at ${PORT}`);
});
