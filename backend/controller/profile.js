const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function handleProfileDetails(req, res) {
  try {
    const token = req.header("Authorization");
    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const user = await User.findById(id);
    if (!user)
      return res.json({
        message: "User not found",
        success: false,
      });
    return res.json({
      message: "Getting user details successful",
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching profile details",
      error: error.message,
      success:false
    });
  }
}

async function editProfileDetails(req, res) {
  try {
    const token = req.header("Authorization");
    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const { email, name, dob, country, phoneNo, countryCode } = req.body;
    const requiredFields = [
      "email",
      "name",
      "dob",
      "country",
      "phoneNo",
      "countryCode",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          message: `${field} is required`,
          success: false,
        });
      }
    }

    const user = await User.findByIdAndUpdate(
      id,
      {
        email,
        name,
        dob,
        country,
        phoneNo,
        countryCode,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Updated user details successful",
      user,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "Error in updating details",
    });
  }
}
module.exports = { handleProfileDetails, editProfileDetails };
