const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("./../../middleware/auth");
//User Model
const User = require("../../models/user");
// Route POST  api/auth
// desc POST all auth

router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: "user does not exists" });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Password Incorrect" });
      jwt.sign(
        {
          id: user.id,
        },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

// Route GET  api/auth/user
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
