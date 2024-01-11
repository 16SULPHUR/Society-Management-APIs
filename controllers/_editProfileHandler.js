var fs = require("fs");
var path = require("path");
const User = require("../models/User");
const uploadImage = require("./_uploadImage");

async function _editProfileHandler(req, res) {
  const body = req.body;
  const image = req.file;

  console.log(body)

  try {
    const user = await User.findById({ _id: body.id });

    if (image) {
      var profilePhotoUrl = await uploadImage(image);
      user.dp = profilePhotoUrl;
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (body.name) {
      user.name = body.name;
    }

    if (body.email) {
      user.email = body.email;
    }

    if (req.file) {
      user.hasProfilePhoto = true;
    }

    if (body.phone) {
      user.mobile = body.phone;
    }

    const savedUser = await user.save();
    // console.log(savedUser);

    const updatedUser = await User.findById({ _id: body.id });
    console.log(updatedUser)
    // res.header("Access-Control-Allow-Origin", "*")
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    // res.header( "Access-Control-Allow-Methods", "OPTIONS,POST,GET,PATCH")
    res.json(updatedUser);
  } catch (e) {
    console.log(e);
  }
}

function convertUsername(username) {
  const building = username.charAt(0).toUpperCase(); // Convert first character to uppercase
  const flatNumber = username.slice(1, 2); // Get characters 2 and 3
  const rest = username.slice(2); // Get the rest of the characters

  return `${building}-${flatNumber}/${rest}`;
}

module.exports = _editProfileHandler;
