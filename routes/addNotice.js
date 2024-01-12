const express = require("express");
const _addNoticeHandler = require('../controllers/_addNoticeHandler')
const router = express.Router();

router.get("/", async (req, res, user) => {
    _addNoticeHandler(req,res)
});

module.exports = router;
