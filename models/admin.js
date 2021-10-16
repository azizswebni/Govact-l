const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Admin model

const AdminSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model("Admin", AdminSchema);
