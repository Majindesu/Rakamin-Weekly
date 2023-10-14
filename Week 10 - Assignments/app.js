const express = require('express')
const path = require('path')
const movies = require('./routes/movies.js')
const users = require('./routes/users.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', movies)
app.use('/users', users)
app.use('/movies/upload', express.static(path.join(__dirname, '/upload')));

app.listen(3000, () => {
    console.log('Connected to the server')
})