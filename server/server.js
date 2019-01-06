require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const emailRouter = require('./email.router.js')
const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config')

console.log("CLIENT_ORIGIN", CLIENT_ORIGIN)

app.use(cors({
  origin: CLIENT_ORIGIN
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('winning')
})

app.use('/email', emailRouter)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

// To get rid of all the Mongoose deprecation warnings
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}

mongoose.connect(DB_URL, options, () => {
  app.listen(PORT, () => console.log('👍'))
})