const Event = require("../models/Event")

async function _editEventHandler(req,res){
    try{
    const body = req.body;
    console.log(body) 

    const eventToEdit = await Event.findById({_id: body.id});
    // console.log(eventToEdit)

    eventToEdit.title = body.title;
    eventToEdit.description = body.description;

    await eventToEdit.save();

    const updatedEvent = await Event.findById(body.id);
    
    res.json(updatedEvent)
    }
    catch{
        res.send({"error":"Bhai error aa gaya. id ek bar check kar"})
    }
}

module.exports = _editEventHandler;