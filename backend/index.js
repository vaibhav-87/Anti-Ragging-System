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



app.use('/api/login', LoginRoute);
app.use('/api/register', Routes);

app.post('/login/success', (req, res)=>{
  
})

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});