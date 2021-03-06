
// Testing a delay, without using async but setTimeout funciton
function kickoff(sec){
console.log("Hello, i'm first");
setTimeout(() => {

    console.log("Sorry for the delay, what's " + sec / 1000 + " seconds between friends")
}, sec)

console.log("I'm next because there is a delay")
}

kickoff(2000);

///////////////////////////////////////////////////////////////////

// BEGIN TESTING FOR WEATHER JOURNAL
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/index.html', function (req, res) {
  res.send('hello world');
})

// Tesinng baseURL works, with city predefined as a variable.
let baseUrl =  'http://api.openweathermap.org/data/2.5/weather?q=';
let units = '&units=metric'; // convert f degree to C degree, append to end of key
let apiKey = '1e32a5f263864d02667d1379ca8e179a';

//document.getElementById('generate').addEventListener('click', performAction);
//
function performAction(e){
    
    const newCity =  'London'//Using predefined city variable
    newInput(baseUrl,newCity, apiKey)
    
    }
    const newInput = async (baseURL, city, key)=>{
    
      const res = 'baseURL'+'city'+'key';
      try {
    
        const data = res;
        console.log(data)
        return data;
      }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }

    performAction();

// TEST CODE SAMPLE -=============================================================================
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Setup Server
const port = 8800;
const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

/* Middleware*/

const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// GET and POST routes

projectData = {};

app.get('/all', getData);

function getData (req, res) { 
    console.log(projectData);
    res.send(projectData);
}

//post function

app.post('/add', addData);

function addData(request, response) {

let data = request.body;

console.log('server side data ', data);

projectData["temp"] = data.temp;
projectData["date"] = data.date;
projectData["resp"] = data.resp;

response.send(projectData);
}
