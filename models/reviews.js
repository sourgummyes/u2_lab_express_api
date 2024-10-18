const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        reviewer: {type: String, required: true},
        score: {type: Number, required: true, max: 10},
        comment: {type: String, required: true}
},
{timestamps: true}
)

module.exports = reviewSchema