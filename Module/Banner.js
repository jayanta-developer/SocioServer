const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Banner", BannerSchema);
