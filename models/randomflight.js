const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const randomflightSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: false },
  departureDate: { type: Date, required: false },
  duration: { type: Date, required: false },
  maxPrice: { type: Number, required: false }
});

const randomflight = mongoose.model("Random Flight", randomflightSchema);

module.exports = randomflight;