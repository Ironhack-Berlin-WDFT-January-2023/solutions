// Import movies: const movies = require("./data") 

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie) {
        return movie.director
    })
}

function getAllDirectorsUnique(moviesArray) {
    return getAllDirectors(moviesArray)
    .filter(function(director, i, moviesArray) {
        return moviesArray.indexOf(director) === i
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(function(movie) {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    })

    return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0

    const totalScore = moviesArray.reduce(function(acc, val) {
        if (!val.score) return acc

        return acc + val.score
    }, 0)

    return Number((totalScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie) {
        return movie.genre.includes("Drama")
    })

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray
    .slice()
    .sort(function(a, b) {
        // if (a.year === b.year) {
        //     return a.title.localeCompare(b.title)
        // }

        // return a.year - b.year

        return a.year - b.year || a.title.localeCompare(b.title)
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(function(movie) {
        return movie.title
    })
    .sort()
    .slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie) {
        let minutes = 0
        let hoursInMinutes = 0
        
        if (movie.duration.includes("m")) {
            minutes = Number(movie.duration.slice(movie.duration.indexOf(" ") + 1, movie.duration.indexOf("m")))
        }

        if (movie.duration.includes("h")) {
            hoursInMinutes = Number(movie.duration.slice(0, movie.duration.indexOf("h"))) * 60
        }
    
        return { ...movie, duration: minutes + hoursInMinutes }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg (moviesArray) {
    if (moviesArray.length === 0) return null
    
    const years = [...new Set(moviesArray.map(function(movie) {
        return movie.year
    }))]
    const scoresByYear = []
    
    years.forEach(function(year) {
        scoresByYear.push({year, score: scoresAverage(moviesArray.filter(function(movie) {
            return movie.year === year
        }))})
    })
    
    const scoresByYearSorted = scoresByYear.sort(function(a, b) {
        return b.score - a.score || a.year - b.year
    })
  
    const best = scoresByYearSorted[0]

    return `The best year was ${best.year} with an average score of ${best.score}`
}

// Alternative Solution:
// function bestYearAvg (movies) {
//     let scoresByYear = {};
    
//     movies.forEach(movie => {
//       if (scoresByYear[movie.year]) {
//           scoresByYear[movie.year].score = scoresByYear[movie.year].score + movie.score;
//         scoresByYear[movie.year].count++;
//       } else {
//           scoresByYear[movie.year] = {
//         score: movie.score, 
//         count: 1
//           }  
//       }
//     })
    
//     const scoresByYearEntries = Object.entries(scoresByYear)
    
//     const scoresByYearSorted = scoresByYearEntries
//       .map(year => {
//       return [year[0], year[1].score / year[1].count]
//     })
//       .sort((a, b) => {
//       return b[1] - a[1];
//     })
    
//     return scoresByYearSorted[0];
//   }

