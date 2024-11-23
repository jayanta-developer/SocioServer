const express = require("express");
const router = express.Router();

const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../Controller");

//Flats
router.post("/flats/create", createProperty);
router.get("/flats", getAllProperties);
router.get("/flats/:id", getPropertyById);
router.post("/flats/update/:id", updateProperty);
router.post("/flats/delete/:id", deleteProperty);

module.exports = router;
