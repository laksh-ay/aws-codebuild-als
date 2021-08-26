const serverless = require('serverless-http')
const express = require('express')
import * as dotenv from "dotenv";
const app = express()
dotenv.config();

app.get('/hello', (req, res) => {
  res.send(`Hello World, You Suck! ${process.env.QA_TITLE}`)
})

module.exports.handler = serverless(app)
