
const Notice = require("../models/Notice");

async function _getAllEvents(req, res) {
  const body = req.body;
  try {
    console.log(body);

    const result = await Notice.find();
    console.log("result="+result)

    res.json(result)
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = _getAllEvents;
