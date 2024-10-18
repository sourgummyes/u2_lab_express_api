const db = require('../db')
const { Movie } = require('../models')
const { Review } = require('../models')

//used chatgpt to generate reveier names and comments.
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    const SPVTW = await Movie.find({ name: 'Scott Pilgrim Vs The World' })
    const EasyA = await Movie.find({ name: 'Easy A' })
    const Clue = await Movie.find({ name: "Clue" })
    const reviews = [
        {
            reviewer: "Alice Johnson",
            score: 9,
            comment: "An absolute gem! The humor and style are top-notch.",
            movie_id: SPVTW[0].id
        },
        {
            reviewer: "Bob Smith",
            score: 7,
            comment: "Enjoyable, but I felt the pacing was a bit off in the middle.",
            movie_id: SPVTW[0].id
        },
        {
            reviewer: "Charlie Davis",
            score: 10,
            comment: "One of the best movies I've seen this year! Highly recommend.",
            movie_id: EasyA[0].id
        },
        {
            reviewer: "Diana Prince",
            score: 6,
            comment: "Had some funny moments, but overall it didn't live up to the hype.",
            movie_id: EasyA[0].id
        },
        {
            reviewer: "Edward Norton",
            score: 8,
            comment: "Great visuals and a fun story, but a little predictable.",
            movie_id: Clue[0].id
        },
        {
            reviewer: "Fiona Gallagher",
            score: 5,
            comment: "It had potential, but fell short of expectations. Could've been better.",
            movie_id: Clue[0].id
        }]
        await Review.insertMany(reviews)
        console.log('Created Reviews!')
    }
    
    const run = async () => {
        //runs our main function and awaits for the data to populate
          await main()
          //closes our db after its run so things don't break
          db.close()
        }
    
        run()