const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("./../../middleware/auth");
//User Model
const admin = require("../../models/admin");
// Route POST  api/auth
// desc POST all auth

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  admin.findOne({ username }).then((admin) => {
    if (!admin) {
      return res.status(400).json({ msg: "admin does not exists" });
    }
    bcrypt.compare(password, admin.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Password Incorrect" });
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
            },
          });
        }
      );
    });
  });
});

// Route GET  api/auth/admin
router.get("/admin", auth, (req, res) => {
  admin
    .findById(req.admin.id)
    .select("-password")
    .then((admin) => res.json(admin));
});

module.exports = router;
