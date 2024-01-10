const express = require("express");
const _loginHandler = require('../controllers/_loginHandler')
const router = express.Router();

router.get("/", async (req, res, user) => {
  res.json({"resp":"success"})
});

router.post("/", async (req, res) => {
  console.log("post to login");
  _loginHandler(req,res)
});

module.exports = router;
