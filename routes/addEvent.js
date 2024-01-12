const express = require("express");
const addEventHandler = require('../controllers/addEventHandler')
const router = express.Router();

router.post("/", async (req, res) => {
    addEventHandler(req,res)
});

module.exports = router;
