// To connect with your mongoDB database
const mongoose = require('mongoose');
const { exec } = require('child_process')
require('dotenv').config();
try{
    mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        
    })
    .catch((err) => {
        console.log(err);
    });

} catch (e) {
    console.log("could not connect");
}
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log(`App listen at port ${process.env.PORT}`);
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});

app.post("/test", async (req, resp) => {
    try {
        console.log("Server Test") 

        //exec("powershell cat helloWorld.cpp", (error, stdout, stderr) => {
        exec("powershell ./hello.exe", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } catch (e) {
        console.log(e);
        resp.send("Something Went Wrong");
    }
});

app.post("/register", async (req, resp) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        let result = await user.save();
        console.log(result);
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        console.log(e);
        resp.send("Something Went Wrong");
    }
});
app.listen(process.env.PORT);
