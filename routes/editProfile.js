const express = require("express");
const _editProfileHandler = require("../controllers/_editProfileHandler");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the folder where you want to save the files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single('image'), async (req, res) => {
  console.log("POST TO UPDATE PROFILE");
  _editProfileHandler(req, res);
});

module.exports = router;
