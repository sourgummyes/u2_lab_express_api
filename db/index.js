const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/moviessDatabase') 
  .then(() => {
    console.log('connected to MongoDB.')
  })
  .catch((e) => {
    console.error('error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db