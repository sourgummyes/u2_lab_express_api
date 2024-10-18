const { Schema } = require('mongoose')

const actorsSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true},
    alive: { type: Boolean, required: true},
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' }
  },
  { timestamps: true }
)

module.exports = actorsSchema