const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('No baby it does matter, atleast to me')
})

module.exports.handler = serverless(app)