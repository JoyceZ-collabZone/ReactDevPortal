const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
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
  swagger: {
    type: Object,
    required: false,
  },
  reference: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("apimetadatamodel", apiSchema);
