//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){ //req means request and res means response
    // response.send("Hello");
    res.send("<h1>Hello, world!</h1>");
    // console.log(request);
});

app.get("/contact", function(req, res){
    res.send("Contact me at: chester@gmail.com");
});

app.get("/about", function(req, res){
    res.send("I'm Chester. I'm a self-taught front end web developer.");
});

app.get("/hobbies", function(req, res){
    res.send("I like watching movies and playing videogames!");
});

app.listen(3000, function(){
    console.log("Server started on port 3000!");
});