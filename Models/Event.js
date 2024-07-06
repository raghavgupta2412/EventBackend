const mongoose = require("mongoose");

let eventSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  maxEnrollment: {
    type: Number,
    min: 2,
    required: true,
  },
  enrolled: {
    type: Number,
  },
  prizepoll: {
    first: { type: Number, min: 0, required: true },
    second: { type: Number, min: 0, required: true },
    third: { type: Number, min: 0, required: true },
  },
  entryfee: {
    Type: Number,
    min: 0,
    required: true,
  },
  format: {
    type: String,
  },
});

let Event = mongoose.model("event", eventSchema);
module.exports = Event;
