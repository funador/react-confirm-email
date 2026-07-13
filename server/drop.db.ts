import mongoose from 'mongoose'
import { DB_URL } from './config'

mongoose.connect(DB_URL as string)
  .then(() => mongoose.connection.db!.dropDatabase())
  .then(() => process.exit())
