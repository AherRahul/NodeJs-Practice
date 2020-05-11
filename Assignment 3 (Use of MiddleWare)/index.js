const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World..!!");
});

const admin = (req, res) => {
    return res.send("I am Admin..!!");
};

// flag to restrict middleware
const checkAdmin = true; //flase

const isAdmin = (req, res, next) => {
    if (!checkAdmin) {
        console.log("Your not Admin");
        res.send("You Not have Admin privilleges..!!");
    } else {
        console.log("isAdmin is running..!!");
        next();
    }
}

var loggedIn = true; //false
const isLoggedIn = (req, res, next) => {
        if (loggedIn) {
            console.log("User Logged In");
            next();
        } else {
            console.log("Not logged In");
            res.send("Please Logged in");
        }
    }
    // Test Of Middleware
app.get('/admin', isLoggedIn, isAdmin, admin);

app.get('/login', (req, res) => {
    res.send("Login Works..!!");
});

app.get('/signup', (req, res) => {
    res.send("Sign Up Works...!!");
});

app.get('/signout', (req, res) => {
    res.send("Hey..!! You signed out..!!");
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));