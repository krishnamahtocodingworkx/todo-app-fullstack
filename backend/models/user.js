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
      select: false, // Prevents password from being returned in queries by default
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10,15}$/, "Phone number must be 10-15 digits long"],
    },
    countryCode: {
      type: String,
      required: [true, "Country code is required"],
      match: [/^\+\d{1,4}$/, "Invalid country code format"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
