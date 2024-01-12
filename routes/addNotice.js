const express = require("express");
const _addNoticeHandler = require('../controllers/_addNoticeHandler')
const router = express.Router();

router.post("/", async (req, res) => {
    _addNoticeHandler(req,res)
});

module.exports = router;
