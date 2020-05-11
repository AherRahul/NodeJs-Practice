const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World..!!");
});

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