const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }], // List of ingredients
  steps: { type: String, required: true }, // Method/Instructions
  category: { type: String, required: true }, // breakfast, dessert, etc.
  image: { type: String }, // Optional URL or base64
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', recipeSchema);
