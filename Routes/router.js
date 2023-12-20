const express = require("express");
const router = express.Router();
const students = require("../models/studentSchema");
const nodemailer = require("nodemailer");

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Register Students Details

router.post("/register", async (req, res) => {
  let users = new students();
  users.fname = req.body.fname;
  users.mName = req.body.mName;
  users.lname = req.body.lname;
  users.date = req.body.date;
  users.aClass = req.body.aClass;
  users.tounge = req.body.tounge;
  users.religion = req.body.religion;
  users.Aadhar = req.body.Aadhar;
  users.category = req.body.category;
  users.ffname = req.body.ffname;
  users.flname = req.body.flname;
  users.fqualification = req.body.fqualification;
  users.foccupation = req.body.foccupation;
  users.fphone = req.body.fphone;
  users.frAadhar = req.body.frAadhar;
  users.mfname = req.body.mfname;
  users.mlname = req.body.mlname;
  users.mqulification = req.body.mqulification;
  users.moccupation = req.body.moccupation;
  users.mphone = req.body.mphone;
  users.mAadhar = req.body.mAadhar;
  users.locname = req.body.locname;
  users.loclname = req.body.loclname;
  users.caddress = req.body.caddress;
  users.paddress = req.body.paddress;
  users.locphone = req.body.locphone;

  const doc = await users.save();
  // const mailOptions = {
  //   from: process.env.EMAIL,
  //   to: mphone,
  //   subject: "registration",
  //   text: "Your Responce is been Submitted",
  // };
  // transpoter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log("eeror" + error);
  //   } else {
  //     console.log("Submited" + info);
  //     res.status(201).json({ status: 201, message: "Succesfully" });
  //   }
  // });

  console.log(doc);
});

module.exports = router;
