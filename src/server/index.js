// TODO: Configure the environment variables
const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

// TODO add Configuration to be able to use env variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const textApi = process.env.API_KEY
let userInput = []

// TODO: Create an instance for the server
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
//const fetch = require('node-fetch');
const app = express()
// TODO: Configure cors to avoid cors-origin issue
const cors = require("cors")
app.use(cors());
// TODO: Configure express to use body-parser as middle-ware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
// TODO: Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/
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

// TODO: export app to use it in the unit testing
