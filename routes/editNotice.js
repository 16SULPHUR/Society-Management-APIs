const express = require("express");
const _editNoticeHandler = require('../controllers/editNoticeHandler')
const router = express.Router();

router.post("/", (req, res) => {
    _editNoticeHandler(req,res)
});

module.exports = router;
