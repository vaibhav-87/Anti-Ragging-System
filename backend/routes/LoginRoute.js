const express = require("express");
const router = express.Router();
const { User } = require("../database.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post("/", passport.authenticate("local"), (req, res) => {
  // If this line is reached, it means that the user has been authenticated successfully
  const user = req.user;

  // Create a JWT token containing user data
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    "your-secret-key",
    {
      expiresIn: 120, // Token expires in 1 hour
    }
  );

  // Send the token to the client
  res.json({ token });
});

module.exports = router;
