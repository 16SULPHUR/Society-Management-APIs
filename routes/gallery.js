const express = require("express");
const {_gallaryController} = require('../controllers/_galleryController')
const router = express.Router();

router.get("/", async (req, res, user) => {
    _gallaryController(req,res)
});

module.exports = router;
