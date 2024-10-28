const express = require ('express')
const PORT = process.env.PORT || 3006
const moviesController = require('./controllers/moviesController')

const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
app.use(logger('dev'))

app.use(bodyParser.json())

app.listen(PORT, ()  => {
    console.log(`Express port: ${PORT}`)
})

app.get('/', (req, res) =>{
    res.send(`test`);
})


app.get('/movies', moviesController.getAllMovies)
app.get('/movies/id/:id', moviesController.getMovieById)
app.get('/reviews', moviesController.getAllReviews)
app.get('/reviews/id/:id', moviesController.getReviewById)
app.get('/actors', moviesController.getAllActors)
app.get('/actors/id/:id', moviesController.getActorById)
