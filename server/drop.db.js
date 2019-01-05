const mongoose = require('mongoose')
const { DB_URL } = require('./config')

mongoose.connect(DB_URL, () => {
  mongoose.connection.db.dropDatabase()
    .then(() => process.exit())
})