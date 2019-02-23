require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const emailController = require('./email/email.controller')
const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config')

// Only allow requests from our client
app.use(cors({
  origin: CLIENT_ORIGIN
}))

// Allow the app to accept JSON on req.body
app.use(express.json())

// This endpoint is pinged every 5 mins by uptimerobot.com to prevent 
// free services like Heroku and Now.sh from letting the app go to sleep.
// This endpoint is also pinged every time the client starts in the 
// componentDidMount of App.js. Once the app is confirmed to be up, we allow 
// the user to perform actions on the client.
app.get('/wake-up', (req, res) => res.json('👌'))

// This is the endpoint that is hit from the onSubmit handler in Landing.js
// The callback is shelled off to a controller file to keep this file light.
app.post('/email', emailController.collectEmail)

// Same as above, but this is the endpoint pinged in the componentDidMount of 
// Confirm.js on the client.
app.get('/email/confirm/:id', emailController.confirmEmail)

// Catch all to handle all other requests that come into the app. 
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

// To get rid of all those semi-annoying Mongoose deprecation warnings.
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}


// Connecting the database and then starting the app.
mongoose.connect(DB_URL, options, () => {
  app.listen(PORT, () => console.log('👍'))
})
// The most likely reason connecting the database would error out is because 
// Mongo has not been started in a separate terminal.
.catch(err => console.log(err))