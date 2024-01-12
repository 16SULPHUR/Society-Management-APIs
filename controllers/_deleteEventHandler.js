const Event = require("../models/Event");

async function _deleteEventHandler(req, res) {
  try {
    const body = req.body;
    console.log(body);

    await Event.deleteOne({_id : body.id});

    updatedEvents = await Event.find();

    res.json(updatedEvents);
  } catch (e) {
    res.send({ error: "Bhai error aa gaya:  " + e });
  }
}

module.exports = _deleteEventHandler;
