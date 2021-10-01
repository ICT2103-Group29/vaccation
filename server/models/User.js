const mongoose = require("mongoose");
const { USER } = require("../constants/roles");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
    default: USER,
  },
});

module.exports = mongoose.model("User", userSchema);
