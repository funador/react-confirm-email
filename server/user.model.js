const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fields = {
  email: {
    type: String,
    unique: true
  },
  confirmed: {
    type: Boolean,
    default: false
  }
}

const options = {
  timestamps: true
}

const userSchema = new Schema(fields, options)

module.exports = mongoose.model('User', userSchema)
