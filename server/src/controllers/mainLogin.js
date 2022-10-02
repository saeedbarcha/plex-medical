require("dotenv").config()
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
require("../db/conn");

const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const superAdmin = require("../models/superAdminModel");

// user login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    const adminLogin = await Admin.findOne({ email: email });
    const superAdminLogin = await superAdmin.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ message: "invalid credintials" });
      } else {
        const token = await jwt.sign(
          { _id: userLogin._id },
          process.env.SECRET_KEY,
          {
            expiresIn: "1 year",
          }
        );
        // console.log(token);
        /// varifing userVer
        const userVer = await jwt.verify(
          token,
          process.env.SECRET_KEY
        );
        // console.log(AdminVer);
        res.status(200).json({
          message: "User signed in!",
          _id: userLogin._id,
          email: userLogin.email,
          name: userLogin.username,
          role: userLogin.role,
          token: token,
          userVer:userVer
        });
      }
    } else if (adminLogin) {
      const isMatch = await bcrypt.compare(password, adminLogin.password);
      if (!isMatch) {
        res.status(400).json({ message: "invalid credintials" });
      } else {
        const token = await jwt.sign(
          { _id: adminLogin._id },
          process.env.SECRET_KEY,
          {
            expiresIn: "1 year",
          }
        );
        // console.log(token);
        /// varifing AdminVer
        const adminVer = await jwt.verify(
          token,
          process.env.SECRET_KEY
        );
        // console.log(adminVer);
        res.status(200).json({
          message: "Admin signed in!",
          _id: adminLogin._id,
          email: adminLogin.email,
          name: adminLogin.adminname,
          role: adminLogin.role,
          token: token,
          adminVer:adminVer
        });
      }
    } else if (superAdminLogin) {
      // console.log(superAdminLogin);
      const isMatch = await bcrypt.compare(
        password,
        superAdminLogin.password
      );
      if (!isMatch) {
        res.status(400).json({ message: "invalid credintials" });
      } else {
        const token = await jwt.sign(
          { _id: superAdminLogin._id },
          process.env.SECRET_KEY,
          {
            expiresIn: "1 year",
          }
        );
        // console.log(token);
        /// varifing supAdminVer
        const supAdminVer = await jwt.verify(
          token,
          process.env.SECRET_KEY
        );
        // console.log(supAdminVer);
        res.status(200).json({
          message: "Super Admin signed in!",
          _id: superAdminLogin._id,
          email: superAdminLogin.email,
          name: superAdminLogin.superadminname,
          role: superAdminLogin.role,
          token: token,
          supAdminVer:supAdminVer
        });
      
      }
    } else {
      res.status(400).send("invalid crediantles");
    }
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
