const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  room: String,
  people: String,
  choices: { type: Array, required: true },
  event: String,
  deploy: Boolean
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

// books = rooms
// title = people 
// author = choices 
// synopsis = event
// date = deploy