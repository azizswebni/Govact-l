const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("./../../middleware/auth");
//admin Model
const Admin = require("../../models/admin");
const User = require("../../models/user");
// Route GET  api/admins
// desc Get all admins

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  Admin.findOne({ username }).then((admin) => {
    if (admin) {
      return res.status(404).json({ msg: "admin already exists" });
    }
    const newadmin = new Admin({
      username,
      password,
    });
    // create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newadmin.password, salt, (err, hash) => {
        if (err) throw err;
        newadmin.password = hash;
        newadmin.save().then((admin) => {
          jwt.sign(
            {
              id: admin.id,
            },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                admin: {
                  username: admin.username,
                  password: admin.password,
                },
              });
            }
          );
        });
      });
    });
  });
});

router.get("/users",auth, (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((u) =>
      res.json(u)
    );
});
module.exports = router;
