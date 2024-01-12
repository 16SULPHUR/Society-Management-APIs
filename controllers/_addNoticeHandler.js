const Notice = require("../models/Notice");

async function _addNoticeHandler(req, res) {
  try {
    const body = req.body;
    console.log(body);

    const newNotice = new Notice({
      title: body.title,
      content: body.content
    });
  
    await newNotice.save();
  
    const updatedNotices = await Notice.find();

    res.json(updatedNotices);
  } catch (e){
    res.send({ error: "Bhai error aa gaya:  "+ e});
  }
}

module.exports = _addNoticeHandler;
