require('dotenv').config()

const express = require('express')
const redis = require('redis');
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('test route')
})

app.get('/test/foo', (req, res) => {
  res.send('test route foo')
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})