const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    const listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = listOfDays[currentDay];
    // Another way to accomplish this task is to use if else statement
    // Also we can use switch statement to do this
    res.render("list", {
        kindOfDay: day
    })
});



app.listen(3000, function () {
    console.log("Server started on port 3000!")
});