const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const superAdmin = require("../models/superAdminModel");

router.post("/adminsignup", async (req, res) => {
  const { adminname, organization, email, password, cpassword } = req.body;
  // console.log(req.body)
  
  if (!adminname || !organization || !email || !password || !cpassword) {
    return res.json({ message: "please fill the required fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    const adminExist = await Admin.findOne({ email: email });
    const superAdminExist = await superAdmin.findOne({ email: email });

    if (userExist || adminExist || superAdminExist) {
      return res.status(422).json({ message: "Email already Exist" });
    }else if(!email.endsWith("@gmail.com")){
      return res.json({ message: "Email format is Invalid" });
    }else if (password != cpassword) {
      return res.status(421).json({ message: "password is not matching" });
    } else {
      const bpassword = await bcrypt.hash(password, 10);
      const admin = new Admin({
        adminname: req.body.adminname,
        organization: req.body.organization,
        email: req.body.email,
        password: bpassword,
      });
      await admin.save();
      res.status(201).json({ message: "Admin registered successfully" });
    }
    console.log("Api runing successfully");
  } catch (err) {
    console.log(err);
  }
});


  
// get all Admins
router.get("/getadmins", async (req, res) => {
  try {
    const getAdmins = await Admin.find();
    if (getAdmins[0]===undefined) {
      // console.log("No any Admin Registered")
      // console.log(getAdmins) // this will return an empty array
      res.status(400).json({ message: "No any Admin registered." });
     
    }else{
      res.status(200).json(getAdmins);
      // console.log(getAdmins)
    }
    console.log("Api runing successfully");
  }
  catch(err){
    // console.log(err)
    console.log("Server error")
    res.status(500).json({ message: "Server error" });
  }   
});

module.exports = router;