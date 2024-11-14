const Property = require("../Module/Flates");

// Create a new property
exports.createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findOne({ id: req.params.id });
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a property by ID
exports.updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a property by ID
exports.deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
