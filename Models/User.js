const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    max: 30,
    required: true,
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "events",
    },
  ],
});

let User = mongoose.model("users", userSchema);
module.exports = User;
