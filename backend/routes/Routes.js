const express = require('express');
const router = express.Router();
const { User } = require("../database.js");
const passport = require('passport');


router.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (user) return res.status(400).send("User already exists!");

  const newUser = await User.create(req.body);

  res.status(201).send(newUser);
});

module.exports = router;