const Event = require("../models/Event");

async function _addNoticeHandler(req, res) {
  try {
    const body = req.body;
    console.log(body);

    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location
    });

    await newEvent.save();

    updatedEvents = await Event.find();

    res.json(updatedEvents);
  } catch (e) {
    res.send({ error: "Bhai error aa gaya:  " + e });
  }
}

module.exports = _addNoticeHandler;
