const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  mName: {
    type: String,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: () => new Date(),
  },
  aClass: {
    type: String,
    required: true,
    trim: true,
  },
  tounge: {
    type: String,
    required: true,
    trim: true,
  },
  religion: {
    type: String,
    required: true,
    trim: true,
  },
  Aadhar: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ffname: {
    type: String,
    required: true,
    trim: true,
  },
  flname: {
    type: String,
    required: true,
    trim: true,
  },
  fqualification: {
    type: String,
    required: true,
  },
  foccupation: {
    type: String,
    required: true,
  },
  fphone: {
    type: Number,
    required: true,
  },
  frAadhar: {
    type: Number,
    require: true,
  },
  mfname: {
    type: String,
    required: true,
    trim: true,
  },
  mlname: {
    type: String,
    required: true,
    trim: true,
  },
  mqulification: {
    type: String,
    required: true,
  },
  moccupation: {
    type: String,
    required: true,
  },
  mphone: {
    type: Number,
    required: true,
  },
  locname: {
    type: String,
  },
  loclname: {
    type: String,
  },
  locphone: {
    type: Number,
  },
  caddress: {
    type: String,
    required: true,
  },
  paddress: {
    type: String,
    required: true,
  },
});
const students = new mongoose.model("students", studentSchema);

module.exports = students;
