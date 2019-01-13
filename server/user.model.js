const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
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

// This is not actually used at all. But by breaking fields and options
// Into their own variables/Objects it is much easier to read what
// is actually happening in the Schema
const options = {
  timestamps: true
}

// One nice clean line that combines the 'fields' and 'options' Objects
const userSchema = new Schema(fields, options)

module.exports = mongoose.model('User', userSchema)
