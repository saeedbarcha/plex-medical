const validator = require("validator");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const adminSchema = new mongoose.Schema({
  adminname: {
    type: String,
    required: true,
    minlength: 3,
  },

  organization: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  role: {
    type: String,
    default: "Admin",
  },
});


// we  will create new collection

const admin = new mongoose.model("admin", adminSchema);

// exporting this module
module.exports = admin;