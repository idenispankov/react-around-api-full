const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: "You must provide a valid email address.",
    },
  },
  password: {
    type: String,
    minlength: 10,
    required: true,
    select: false,
  },
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  about: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v, { protocols: ["http", "https"] }),
      message: "You must provide a valid URL for the user avatar.",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
