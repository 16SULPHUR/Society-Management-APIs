const express = require("express");
const _editEventHandler = require('../controllers/_editEventHandler')
const router = express.Router();

router.post("/", (req, res) => {
    _editEventHandler(req,res)
});

module.exports = router;
