// const express = require("express");
// const cookieParser = require("cookie-parser");
// const userRoute = require("./routes/user");
// const todoRoute = require("./routes/todo");
// const { restrictToLoggedInUser } = require("./middlewares/auth");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const multer = require("multer");

// const app = express();
// const PORT = process.env.PORT || 9000;
// const upload = multer({ dest: "uploads/" });
// // XnzgCWSz6UsfNxYB
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());
// dotenv.config();
// app.use(express.urlencoded({ extended: false })); // to pass formdata

// const mongoose = require("mongoose");
// mongoose
//   .connect(
//     "mongodb+srv://krishnamahto:XnzgCWSz6UsfNxYB@cluster0.z6bzh.mongodb.net/"
//   )
//   .then(() => console.log(`DB connected successfully`))
//   .catch(() => console.log(`Error in DB connections`));

// app.post("/upload", upload.single("profileImage"), (req, res) => {
//   console.log("req body :", req.body);
//   console.log("req file :", req.file);

//   return res.json({ msg: "noting" });
// });

// app.use("/", userRoute);
// app.use("/", restrictToLoggedInUser, todoRoute);

// app.listen(PORT, () => {
//   console.log(`App Listent at ${PORT}`);
// });

const express = require("express");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");
const { restrictToLoggedInUser } = require("./middlewares/auth");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Load environment variables first
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;
// const upload = multer({ dest: "uploads/" });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log(`✅ DB connected successfully`))
  .catch((err) => console.error(`❌ Error in DB connection:`, err));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname); // Extracts extension with dot (e.g., ".jpg")
    const baseName = path.basename(file.originalname, fileExt); // Extracts filename without extension

    const shortName = baseName.substring(0, 20); // Ensure max 20 chars
    const uniqueName = `${shortName}-${uuidv4()}${fileExt}`;

    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

// File Upload Route
app.post("/upload", upload.single("profileImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  console.log("req body:", req.body);
  console.log("File received:", req.file);

  return res.json({ message: "File uploaded successfully", file: req.file });
});

// Routes
app.use("/", userRoute);
app.use("/", restrictToLoggedInUser, todoRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 App listening at http://localhost:${PORT}`);
});
