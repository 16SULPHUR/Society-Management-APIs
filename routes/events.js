const express = require("express");
const _getAllEvents = require('../controllers/_getAllEvents')
const router = express.Router();

router.get("/", async (req, res, user) => {
    _getAllEvents(req,res)
});

module.exports = router;
