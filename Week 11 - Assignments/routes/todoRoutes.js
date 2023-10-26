const route = require('express').Router();
const todoController = require('../controllers/todoController');

route.get('/health-check', todoController.healthCheck);
route.get('/', todoController.index);
route.get('/:id', todoController.detail);
route.put('/:id', todoController.edit);
route.post('/add', todoController.add);
route.delete('/:id', todoController.delete)

module.exports = route;