const Notice = require("../models/Notice");

async function _deleteNoticehandler(req, res) {
  try {
    const body = req.body;
    console.log(body);

    await Notice.deleteOne({_id : body.id});

    updatedNotices = await Notice.find();

    res.json(updatedNotices);
  } catch (e) {
    res.send({ error: "Bhai error aa gaya:  " + e });
  }
}

module.exports = _deleteNoticehandler;
