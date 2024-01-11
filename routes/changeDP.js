const express = require('express');
const user = require('../models/User');
const uploadImage = require('../controllers/_uploadImage');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Set up storage for multer
const storage = multer.memoryStorage(); // Store files in memory instead of saving to disk
const upload = multer({ storage: storage });

async function uploadToCloudStorage(fileBuffer, fileName) {
    const file = await uploadFile(fileBuffer, {
      publicKey: "9eaeb2ea2031be2f1d7c",
      fileName: fileName,
      contentType: "image/jpeg", // Adjust the content type based on your file type
    });
  
    console.log(file.cdnUrl);
    return file.cdnUrl;
  }
  
  router.post("/", upload.single('image'), async (req, res) => {
    try {
      const { buffer, originalname } = req.file;
  
      // Directly upload to cloud storage
      const cdnUrl = await uploadToCloudStorage(buffer, originalname);
  
      // Respond with the CDN URL or any other necessary data
      res.json({ cdnUrl: cdnUrl, message: "Image uploaded to cloud storage" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;
