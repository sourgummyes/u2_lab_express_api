const mongoose = require('mongoose')
const moviesSchema = require('./movies')
const actorsSchema = require('./actors')
const reviewSchema = require('./reviews')
//const DriverSchema = require('./drivers')

//const Movie = mongoose.model('Movie', moviesSchema)
const Actor = mongoose.model('Actor', actorsSchema)
const Review = mongoose.model('Review', reviewSchema)


module.exports = {
    //Movie,
    Actor,
    Review,
}