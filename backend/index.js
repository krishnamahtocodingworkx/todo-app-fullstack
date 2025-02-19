const express = require("express");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");
const { restrictToLoggedInUser } = require("./middlewares/auth");
const cors = require("cors");
const dotenv = require('dotenv')
const app = express();
const PORT = process.env.PORT || 9000;
// XnzgCWSz6UsfNxYB
app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://krishnamahto:XnzgCWSz6UsfNxYB@cluster0.z6bzh.mongodb.net/"
);

app.use("/", userRoute);
app.use("/", restrictToLoggedInUser, todoRoute);

app.listen(PORT, () => {
  console.log(`App Listent at ${PORT}`);
});
