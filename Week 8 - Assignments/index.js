var express = require('express');
var app = express();

var pool = require('./database.js')
var routes = require('./routes.js')

app.use('/', routes)

pool.connect((err, client, done)=> {
    if (err) {
        console.error('Error occured:', err)
    } else {
        console.log('Connected to the database!')
    }
})

app.listen(3000);