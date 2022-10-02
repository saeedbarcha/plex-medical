const validator = require("validator");
const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
  superadminname: {
    type: String,
    required: true,
    minlength: 3,
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
  role: {
    type: String,
    default: "Super Admin",
  },
});

// we  will create new collection

const superAdmin = new mongoose.model("superAdmin", superAdminSchema);

// exporting this module
module.exports = superAdmin;
