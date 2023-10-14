const express = require('express')
const router = express.Router()

const pool = require('../configs/database')
const controller = require('../controllers/Users_Controller')

router.get('/', controller.readUsers)

router.get('/:id', controller.readUsersSpecific)

router.post('/', controller.createUsers);

router.put('/:id', controller.updateUsers);

router.delete('/:id', controller.deleteUsers);

module.exports = router