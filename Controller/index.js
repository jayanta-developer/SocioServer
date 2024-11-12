const Flates = require("../Module/Flates");

exports.CreateFlats = async (req, res, next) => {
  try {
    res.send("got values");
  } catch (error) {
    console.log(error);
  }
};
