const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  people: { type: String, required: true },
  choices: { type: String, required: true },
  event: String,
  deploy: { type: deploy, default: deploy.now }
});

const room = mongoose.model("room", roomSchema);

module.exports = room;

// books = rooms
// title = people 
// author = choices 
// synopsis = event
// date = deploy