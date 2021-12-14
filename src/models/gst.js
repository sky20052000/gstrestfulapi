const mongoose = require("mongoose");

// creating gst schema
const gstSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minlength: 3,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gstNo: {
    type: Number,
    required: true,
    minlength: 2,
  },
  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

// creating model

const Gst = new mongoose.model("Gst",gstSchema);
module.exports = Gst;
