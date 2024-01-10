const express = require("express");
const _getAllNotices = require('../controllers/getAllNotices')
const router = express.Router();

router.get("/", async (req, res, user) => {
    _getAllNotices(req,res)
});

module.exports = router;
