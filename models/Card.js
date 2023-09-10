// models/Card.js
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  id: {
    type: Date,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Card", cardSchema);
