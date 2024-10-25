const Movie = require('../models/movies');
const Actor = require('../models/actors');
const Review = require('../models/reviews');

const getAllMovies = async (req, res) => {
    try {
        console.log('test')
        const movies = await Movie.find()
        res.json(movies)
        console.log(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find();
        res.json(actors);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
n


module.exports = {
    getAllMovies,
     getAllActors,
     getAllReviews,
};
