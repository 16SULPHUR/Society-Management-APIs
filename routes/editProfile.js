const express = require("express");
const _editProfileHandler = require("../controllers/_editProfileHandler");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory instead of saving to disk
const upload = multer({ storage: storage });

router.post("/", upload.single('image'), async (req, res) => {
  console.log("POST TO UPDATE PROFILE");
  _editProfileHandler(req, res);
});

module.exports = router;
