const Celebrity = require('../models/Celebrity')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boilerplate')

const celebrities = [
    {
        name: 'Johnny Depp',
        occupation: 'Actor',
        catchPhrase: 'Enjoy the ride while youre on it.'
    },
    {
        name: 'Arnold Schwarzenegger',
        occupation: 'Bodybuilder',
        catchPhrase: 'Hasta la vista, baby'
    },
    {
        name: 'Kanye West',
        occupation: 'Musician',
        catchPhrase: 'I still think I am the greatest.'
    }
]

Celebrity.insertMany(celebrities)
.then(celebrities => {
    mongoose.connection.close()
})
.catch(err => {
    console.log(err);
})

