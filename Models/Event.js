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
    default: 0,
  },
  entryfee: {
    type: Number,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: new Date(),
  },
});

let Event = mongoose.model("event", eventSchema);
module.exports = Event;
