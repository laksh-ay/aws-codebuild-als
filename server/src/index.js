const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello! Can you see me?')
})

module.exports.handler = serverless(app)