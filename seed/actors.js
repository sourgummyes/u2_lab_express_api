const db = require('../db')
const { Movie } = require('../models')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    const SPVTW = await Movie.find({ name: 'Scott Pilgrim Vs The World' })
    const EasyA = await Movie.find({ name: 'Easy A' })
    const Clue = await Movie.find({ name: "Clue" })
const actors = [
    {
        name: "Michael Cera",
        age: 36, // As of 2024
        alive: true,
        movie_id: SPVTW[0].id
    },
    {
        name: "Mary Elizabeth Winstead",
        age: 39, // As of 2024
        alive: true,
        movie_id: SPVTW[0].id
    },
    {
        name: "Kieran Culkin",
        age: 41, // As of 2024
        alive: true,
        movie_id: SPVTW[0].id
    },{
        name: "Emma Stone",
        age: 35, // As of 2024
        alive: true,
        movie_id: EasyA[0]._id 
    },
    {
        name: "Penn Badgley",
        age: 37, // As of 2024
        alive: true,
        movie_id: EasyA[0]._id
    },
    {
        name: "Aly Michalka",
        age: 35, // As of 2024
        alive: true,
        movie_id: EasyA[0]._id
    },    {
        name: "Tim Curry",
        age: 77, // As of 2024
        alive: true,
        movie_id: Clue[0]._id 
    },
    {
        name: "Eileen Brennan",
        age: 80, // Died at age 80
        alive: false,
        movie_id: Clue[0]._id
    },
    {
        name: "Madeline Kahn",
        age: 57, // Died at age 57
        alive: false,
        movie_id: Clue[0]._id
    }
]

await Actor.insertMany(actors)
console.log('Created Actors!')
}


const run = async () => {
    //runs our main function and awaits for the data to populate
      await main()
      //closes our db after its run so things don't break
      db.close()
    }

    run()