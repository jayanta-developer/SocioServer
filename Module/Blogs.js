const mongoose = require("mongoose");

const SummeryItem = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const BlogSchema = new mongoose.Schema({
  images: {
    type: [String],
    required: true,
  },
  conclusion: {
    type: String,
    required: true,
  },
  SummeryArray: [SummeryItem],
});

module.exports = mongoose.model("Blog", BlogSchema);
