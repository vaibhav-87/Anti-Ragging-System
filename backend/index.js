const express = require('express');
const app = express();
const cors = require('cors');
const { connectMongoose, User } = require("./database.js");
const Routes = require('./routes/Routes.js');
const LoginRoute = require('./routes/LoginRoute.js');
const passport = require("passport");
const {initializingPassport} = require('./passportConfig.js');
const expressSession = require("express-session");
const cookieSession = require("cookie-session");
const { Complaints } = require('./ComplaintSchema'); 

connectMongoose();

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );

initializingPassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(expressSession({secret: "secret", resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

//Routes for login and Register
app.use('/api/login', LoginRoute);
app.use('/api/register', Routes);


//Route to submit complaints
app.post("/api/complaint", async(req, res)=>{
  const newComplaint = await Complaints.create(req.body);
  console.log(newComplaint);
  res.status(201).send(newComplaint);
});

//Route to get all complaints associated with perticular username
app.get("/api/getcomplaint", async (req, res) => {
  const { username } = req.query;
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    // Retrieve complaints based on the username
    const allComplaints = await Complaints.find({ username });
    console.log(allComplaints);
    res.json(allComplaints);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve complaints' });
  }
});




app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});