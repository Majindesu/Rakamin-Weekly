const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./documentations/swagger.json');

//morgan for logs
app.use(morgan('common'));

//database connection
var pool = require('./query.js');

//dotenv
require('dotenv').config();

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//routes
const movies = require('./routes/movies.js')
const users = require('./routes/users.js')

app.use('/movies', movies);
app.use('/users', users);

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log("server running"));