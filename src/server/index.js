//Configure the environment variables
const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

//add Configuration to be able to use env variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const textApi = process.env.API_KEY
let userInput = []

//Create an instance for the server
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
//const fetch = require('node-fetch');
const app = express()
const cors = require("cors")
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${textApi}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const data = await response.json()
    console.log(data)
    res.send(data) })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

