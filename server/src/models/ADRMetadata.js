const mongoose = require("mongoose");

const profile = ["developer", "ADR admin", "staff"];
const ADRSchema = new mongoose.Schema({
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
  // brandName: {
  //   type: String,
  //   required: false,
  // },
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
  // status: {
  //   type: String,
  //   required: false,
  // },
  createdBy: {
    type: String,
    required: false,
  },
  lastUpdated: {
    type: String,
    required: false,
  },
  profile: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("ADRMetadataModel", ADRSchema);
