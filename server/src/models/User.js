//this is the model for developer

const mongoose = require("mongoose");

const profile = ["developer", "ADR admin", "staff"];
const userSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("UserModel", userSchema);
