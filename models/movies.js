const { Schema } = require('mongoose')
const mongoose = require('mongoose');
const moviesSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    ageRat: { type: String, required: true},
    runtimeMin: { type: Number, required: true},
    releaseYear: { type: Number, required: true}
  },
  { timestamps: true }
)

module.exports = moviesSchema
//module.exports = mongoose.model('movies', moviesSchema)