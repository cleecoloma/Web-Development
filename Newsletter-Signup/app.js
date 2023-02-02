// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };
    const jsonData = JSON.stringify(data);
    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data))
        })

    })

    request.write(jsonData);

    request.end;
});


const url = "https://us17.api.mailchimp.com/3.0/lists/1e11768765"

const options = {
    method: "POST",
    auth: "chester1: 4aa97be82e80e3c0c29387981c9bd944-us17"
}

mailchimp.setConfig({
    apiKey: "4aa97be82e80e3c0c29387981c9bd944-us17",
    server: "us17",
});

async function run() {
    const response = await mailchimp.lists.addListMember("1e11768765", {
            members: [{}],
        });
    };

console.log(
    `Successfully added contact as an audience member.`
);


// run();

// const run = async () => {
//     const response = await mailchimp.lists.batchListMembers("l1e11768765", {
//         members: [{}],
//     });
//     console.log(response);
// };

// run();



app.listen(3000, function () {
    console.log("Server is running at port 3000!");
});

// API key
//4aa97be82e80e3c0c29387981c9bd944-us17


// List ID
// 1e11768765