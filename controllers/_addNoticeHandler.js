const Notice = require("../models/Notice");

async function _addNoticeHandler(req, res) {
  try {
    const body = req.body;
    console.log(body);

    const noticeToEdit = await Notice.findById({ _id: body.id });
    // console.log(eventToEdit)

    noticeToEdit.title = body.title;
    noticeToEdit.content = body.content;

    await noticeToEdit.save();

    const updatedNotice = await Notice.findById(body.id);

    res.json(updatedNotice);
  } catch {
    res.send({ error: "Bhai error aa gaya. id ek bar check kar" });
  }
}

module.exports = _addNoticeHandler;
