const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    const movies = [
        {
        name: "Scott Pilgrim Vs The World",
        desc: "Scott Pilgrim, a slacker musician who is trying to win a competition to get a record deal, while also battling the seven evil exes of his new girlfriend Ramona Flowers", //wikipedia
        ageRat: "PG13",
        runtimeMin: 112,
        releaseYear: 2010,
        },
        {
            name: "Easy A",
            desc: "desc",
            ageRat: "PG13",
            runtimeMin: 92,
            releaseYear: 2010,
        },
        {
            name: "Clue",
            desc: "desc",
            ageRat: "PG",
            runtimeMin: 94,
            releaseYear: 1985,
        },{
            name: "Coraline",
            desc: "desc",
            ageRat: "PG",
            runtimeMin: 100,
            releaseYear: 2009,
        },{
            name: "Monster House",
            desc: "desc",
            ageRat: "PG",
            runtimeMin: 91,
            releaseYear: 2006,
        },{
            name: "Robots",
            desc: "desc",
            ageRat: "PG",
            runtimeMin: 91,
            releaseYear: 2005,
        }
        
    ]

    await Movie.insertMany(movies)
    console.log('Created Movies!')
}

const run = async () => {
    //runs our main function and awaits for the data to populate
      await main()
      //closes our db after its run so things don't break
      db.close()
    }

    run()