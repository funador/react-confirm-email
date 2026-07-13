import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import * as emailController from './email/email.controller'
import { PORT, CLIENT_ORIGIN, DB_URL } from './config'

const app = express()

// Only allow requests from our client
app.use(cors({
  origin: CLIENT_ORIGIN
}))

// Allow the app to accept JSON on req.body
app.use(express.json())

// Vercel's serverless runtime imports this file and calls the exported
// app directly (it reuses the module across invocations under Fluid
// Compute), so the connection is opened once and cached rather than
// reopened per request.
let db: ReturnType<typeof mongoose.connect> | null = null
app.use((req: Request, res: Response, next: NextFunction) => {
  db = db || mongoose.connect(DB_URL as string)
  db.then(() => next())
    // The most likely reason connecting the database would error out is
    // because Mongo has not been started in a separate terminal.
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Database connection failed' })
    })
})

// This endpoint is pinged every 5 mins by uptimerobot.com to prevent
// free services like Heroku and Now.sh from letting the app go to sleep.
// This endpoint is also pinged every time the client starts in the
// componentDidMount of App.js. Once the app is confirmed to be up, we allow
// the user to perform actions on the client.
app.get('/wake-up', (req: Request, res: Response) => res.json('👌'))

// This is the endpoint that is hit from the onSubmit handler in Landing.js
// The callback is shelled off to a controller file to keep this file light.
app.post('/email', emailController.collectEmail)

// Same as above, but this is the endpoint pinged in the componentDidMount of
// Confirm.js on the client.
app.get('/email/confirm/:id', emailController.confirmEmail)

// Catch all to handle all other requests that come into the app.
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ msg: 'Not Found' })
})

export default app

// Vercel imports this file as a module rather than executing it, so only
// start listening on a port when it's run directly (local dev via
// ts-node-dev, or a traditional `node dist/server.js` host).
if (require.main === module) {
  app.listen(PORT, () => console.log('👍'))
}
