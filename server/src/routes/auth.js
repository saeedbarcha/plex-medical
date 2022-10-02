
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const Admin = require("../models/adminModel");
const SuperAdmin = require("../models/superAdminModel");
const User = require("../models/userModel");

router.get("/", (req, res) => {
  res.send("Hello from the server auth js");
});


module.exports = router;
