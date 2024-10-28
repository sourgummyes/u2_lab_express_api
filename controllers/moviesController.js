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

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (movie) {
            return res.json(movie);
        }
        return res.status(404).send(`Movie with id of ${id} not found!`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Movie doesn't exist`);
        }
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

const getActorById = async (req, res) => {
    try {
        const { id } = req.params;
        const actor = await Actor.findById(id);
        if (actor) {
            return res.json(actor);
        }
        return res.status(404).send(`Actor with id of ${id} not found!`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Actor doesn't exist`);
        }
        return res.status(500).send(error.message);
    }
}


const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Movie.findById(id);
        if (review) {
            return res.json(review);
        }
        return res.status(404).send(`Review with id of ${id} not found!`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Review doesn't exist`);
        }
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getAllMovies,
     getAllActors,
     getAllReviews,
     getActorById,
     getMovieById,
     getReviewById
};
