const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// require("dotenv").config();
require("../db/conn");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const superAdmin = require("../models/superAdminModel");

router.post("/usersignup", async (req, res) => {
  const {username, surname, organization, email, password, cpassword, gender, age,
  } = req.body;
  if (!username || !surname || !organization || !email || !password || !cpassword || !gender || !age) {
    return res.json({ message: "please fill the required fields" });
  }else if(!email.endsWith("@gmail.com")){
    return res.json({ message: "Email format is Invalid" });
  }else{
  try {
    const userExist = await User.findOne({ email: email });
    const adminExist = await Admin.findOne({ email: email });
    const superAdminExist = await superAdmin.findOne({ email: email });

    if (userExist || adminExist || superAdminExist) {
      return res.status(422).json({ message: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(421).json({ message: "password is not matching" });
    } else {
      const bpassword = await bcrypt.hash(password, 10);
      const user = new User({
        username: req.body.username,
        surname: req.body.surname,
        organization: req.body.organization,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        password: bpassword
      });

      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
    console.log("Api runing successfully");
  } catch (err) {
    console.log(err);
  }
}
});

  // get all user
router.get("/getusers", async (req, res) => {
  try {
    const getUsers = await User.find();
    if (getUsers[0]===undefined) {
      res.status(400).json({ message: "No any User registered." });
      // console.log("no any user register yet")
    }else{
      res.status(200).json(getUsers);
      // console.log(getUsers)
    }
  }
  catch(err){
    // console.log(err)
    console.log("Server error")
    res.status(500).json({ message: "Server error" });
  }   
});

module.exports = router;
