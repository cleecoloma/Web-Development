const express = require("express");
const https = require("node:https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bremerton&appid=d7267d56b0088466dcf59931f3b03a61&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data); //changes data from hex to javascript object
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description
            console.log(temp);
            console.log(weatherDescription);
        })

    })
    res.send("Server is up and running");
})





app.listen(3000, function() { 
    console.log("Server is running at port 3000!")
})

// const object = {
//     name: "Chester",
//     favoriteFruit: "Banana"
// }
// console.log(JSON.stringify(object)); //stringify changes date from object to a single string