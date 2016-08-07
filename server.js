'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const compression = require('compression')
const dotenv = require('dotenv')

dotenv.load()
//const foursquare = require('node-foursquare-venues')(process.env.CLIENT_ID, process.env.CLIENT_SECRET)

let app = express()
var port = process.env.PORT || 8081

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())

// Keep this route as the last one
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

function renderMain (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
}

app.get('/', renderMain)
app.get('/*', renderMain)

app.listen(port, () => {
  console.log('Listening on %d', port)
})
