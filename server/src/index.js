const serverless = require('serverless-http')
const express = require('express')
const app = express()
require('dotenv').config()

app.get('/hello', (req, res) => {
  res.send(`Hello World, You Suck! ${process.env.TITLE} ${process.env.DESCRIPTION} ${process.env.BODY} ${process.env.SIGN}`)
})

module.exports.handler = serverless(app)
