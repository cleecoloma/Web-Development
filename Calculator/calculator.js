const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    // res.sendFile("index.html");
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.mum2)

    var result = num1 + num2;
    res.send("The calculation answer is " + result + "."); //prints calculation results
});


app.get("/bmicalculator", function(req,res) {
    // this is for BMI calculator
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res) {
    // console.log(req.body);
    var weight = parseFloat(req.body.weight); //grabs weight from input
    var height = parseFloat(req.body.height)

    var bmi = weight / (height * height); //calculates BMI
    res.send("Your BMI is " + bmi + "."); //outputs results after calculations

app.listen(3000, function() {
    console.log("Server started on port 3000"); //states that port 3000 has been started
});