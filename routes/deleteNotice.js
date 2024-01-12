const express = require("express");
const _deleteNoticehandler = require('../controllers/_deleteNoticehandler')
const router = express.Router();

router.post("/", async (req, res) => {
    _deleteNoticehandler(req,res)
});

module.exports = router;