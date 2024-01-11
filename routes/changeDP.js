const express = require('express');
const user = require('../models/User');
const maintenance = require('../models/Maintenance');
const uploadImage = require('../controllers/_uploadImage');
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

router.post('/', upload.single('image'), (req, res) => {
  const imageUrl = uploadImage(req.file)
  res.json(imageUrl)
})

module.exports = router;
