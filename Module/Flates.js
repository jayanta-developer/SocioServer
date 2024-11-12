const mongoose = require("mongoose");

const FlatesSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: [true, "A user must have a name"],
    unique: true,
  },
  summery: String,
  images: Array,
  video: String,
  city: String,
  Sector: String,
  map: Array,
  price: String,
  owner: String,
  room: Number,
  bath: Number,
  area: String,
  Facilities: Array,
});

const Flates = new mongoose.model("Admin", FlatesSchema);
module.exports = Flates;
