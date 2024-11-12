const express = require("express");
const router = express.Router();

const { CreateFlats } = require("../Controller");

router.post("/flates/create", CreateFlats);

module.exports = router;
