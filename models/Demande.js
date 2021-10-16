const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Item model

const DemandeSchema = new Schema({
  CIN: {
    type: Number,
    required: true,
  },
  NumDemande: {
    type: Number,
    required: true,
    
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Demande = mongoose.model("demande", DemandeSchema);
