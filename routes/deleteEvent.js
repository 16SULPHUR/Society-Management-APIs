const express = require("express");
const _deleteEventHandler = require('../controllers/_deleteEventHandler')
const router = express.Router();

router.post("/", async (req, res) => {
    _deleteEventHandler(req,res)
});

module.exports = router;
