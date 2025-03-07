const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      // select: false, // Prevents password from being returned in queries by default
    },
    dob: {
      type: String,
      trim: true,
      maxlength: [10, "dob cannot exceed 10 characters"],
    },
    country: {
      type: String,
      trim: true,
      minlength: [3, "country must be at least 3 characters long"],
      maxlength: [50, "country cannot exceed 50 characters"],
    },
    phoneNo: {
      type: String,
      match: [/^\d{10,15}$/, "Phone number must be 10-15 digits long"],
      trim: true,
      minlength: [3, "country must be at least 3 characters long"],
      maxlength: [50, "country cannot exceed 50 characters"],
    },
    countryCode: {
      type: String,
      match: [/^\+\d{1,4}$/, "Invalid country code format"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    token: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
