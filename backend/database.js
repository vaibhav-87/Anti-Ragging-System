const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose
    .connect("mongodb+srv://vaiasawaleva:vaibhav@cluster0.wzqa3gm.mongodb.net/?retryWrites=true&w=majority")
    .then((e) => {
      console.log(`Connected to mongodb:${e.connection.host}`);
    })
    .catch((e) => console.log(e));
};

const userSchema = new mongoose.Schema({
    FirstName:{
        type: String,
        required: true
    },

    LastName:{
        type: String,
        required: true
    },
    
    username:{
        type: String,
        required: true,
        unique: true
    },
    
    password:{
        type: String,
        required: true
    }
});

exports.User = mongoose.model("User", userSchema);