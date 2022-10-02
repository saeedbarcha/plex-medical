const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const superAdmin = require("../models/superAdminModel");
(async () => {
  const superadminobj = {
    superadminname: "Admin Plex Medical",
    organization: "plex",
    email: "plexx@gmail.com",
    password: "superadmin123",
    cpassword: "superadmin123",
  };
  const bpassword = await bcrypt.hash(superadminobj.password, 10);
  const superadmin = new superAdmin({
    superadminname: superadminobj.superadminname,
    organization: superadminobj.organization,
    email: superadminobj.email,
    password: bpassword,
  });
  const objStatus = await superAdmin.findOne();
  // console.log(objStatus);

  if (objStatus) {
    // console.log("SuperAdmin Can only register once");
  } else {
    await superadmin.save();
  }
})();



module.exports = router;
