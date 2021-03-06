// Setup empty JS object to act as endpoint for all routes
journalData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3002;
const server = app.listen(port, listening);

function listening(){
    console.log ("Server Running");
    console.log (`running on localhost: ${port}`);
}

//-------------- ROUTES ------------------//

//------- GET route Returns journalData object
app.get('/all', getData); //Get feeling data when index URI is used

function getData (request, response){
    response.send(journalData); //send response to endpoint (object)
    console.log(journalData);
};

//--------POST ROUTE-------------------------
app.post('/all', postData); //URL needs to be defined #IMPORTANT URL CHANGE

function postData (request, response) {

    let data = request.body;

console.log('POST Update to server ', data);

journalData["dttm"] = data.dttm;
journalData["temp"] = data.temp;
journalData["feeling"] = data.feeling;
journalData["city"] = data.location;

response.send(journalData);
};

//-------END POST ROUTE---------------------




