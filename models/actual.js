const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//reclam model

const ActualSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  name:{
    type:String,
    required:false
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Actual = mongoose.model("actual", ActualSchema);
