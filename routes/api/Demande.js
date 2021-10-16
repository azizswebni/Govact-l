const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Item model
const Demande = require("../../models/Demande");

router.get("/", (req, res) => {
  Demande.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/citoyen", (req, res) => {
  let data = { CIN: req.body.CIN, NumDemande: req.body.NumDemande };
  Demande.find(data).then((items) => res.json(items));
});
// Route POST  api/items
// desc  create a POST

router.post("/", (req, res) => {
  const newDemande = new Demande({
    CIN: req.body.CIN,
    NumDemande: req.body.NumDemande,
  });

  newDemande.save().then((item) => res.json(item));
});
// Route DELETE  api/items
// desc  DELETE ITEM

router.delete("/:id", (req, res) => {
  Demande.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: "deleted" })))
    .catch((err) => res.status(404).json({ success: "fail" }));
});

// Route UPDATE  api/items
// desc  UPDATE ITEM
/* router.put("/:id", (req, res) => {
  Demande.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
      },
    }
  )
    .then((itemUpdated) => {
      res.status(201).send(itemUpdated);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}); */
module.exports = router;
