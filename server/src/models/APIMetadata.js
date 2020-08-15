const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  scope: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  permission: {
    type: String,
    required: false,
  },
  Swagger: {
    type: Object,
    required: false,
  },
  Reference: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("apimetadatamodel", apiSchema);
