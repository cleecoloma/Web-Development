const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    console.log("Post request received!");
    const query = req.body.cityName;
    const apiKey = "d7267d56b0088466dcf59931f3b03a61";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data); //changes data from hex to javascript object
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celsius.</h1>");
            res.write("<p>The weather is currently " + weatherDescription + ".</p>");
            res.write("<img src=" + imageURL + ">");
            res.send();
            // console.log(temp);
            // console.log(weatherDescription);
        })

    })
    // res.send("Server is up and running");

});




app.listen(3000, function () {
    console.log("Server is running at port 3000!")
})

// const object = {
//     name: "Chester",
//     favoriteFruit: "Banana"
// }
// console.log(JSON.stringify(object)); //stringify changes date from object to a single string