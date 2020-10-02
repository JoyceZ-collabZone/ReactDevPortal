//this is the model for developer

const mongoose = require("mongoose");

const signIn = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

