const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Item model
const Reclam = require("../../models/reclamation");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Govact/public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
// Route GET  api/items
// desc Get all items

router.get("/", (req, res) => {
  Reclam.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// Route POST  api/items
// desc  create a POST

router.post("/", upload.single("image"), (req, res) => {
  const newReclam = new Reclam({
    title: req.body.title,
    subject: req.body.subject,
    message: req.body.message,
    name: req.body.name,
  });

  newReclam.save().then((item) => res.json(item));
});
// Route DELETE  api/items
// desc  DELETE ITEM

router.delete("/:id", (req, res) => {
  Reclam.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: "deleted" })))
    .catch((err) => res.status(404).json({ success: "fail" }));
});

// Route UPDATE  api/items
// desc  UPDATE ITEM
router.put("/:id", (req, res) => {
  Reclam.updateOne(
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
});
module.exports = router;

/*Item.findById(req.params.id)
    .then((item) => {})
    .then((item) => req.body.json(item))
    .catch((err) => res.json("not updated")); */
