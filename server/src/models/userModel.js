const validator = require("validator");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },

  surname: {
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

  age: {
    type: Number,
    required: true,
  },
  role:{
    type:String,
    default:"User"
  }
});

// we  will create new collection

const user = new mongoose.model("user", userSchema);

// exporting this module
module.exports = user;
