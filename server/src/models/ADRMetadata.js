const mongoose = require("mongoose");

const profile = ["developer", "ADR admin", "staff"];
const ADRSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  legalEntityId: {
    type: String,
    required: false,
  },

  legalEntityName: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  logoUri: {
    type: String,
    required: false,
  },

  softwareProductId: {
    type: String,
    required: false,
  },
  softwareProductName: {
    type: String,
    required: false,
  },

  softwareProductDescription: {
    type: String,
    required: false,
  },
  lastUpdated: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("ADRMetadataModel", ADRSchema);
