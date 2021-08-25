const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('My existence doesn\'t matter')
})

module.exports.handler = serverless(app)