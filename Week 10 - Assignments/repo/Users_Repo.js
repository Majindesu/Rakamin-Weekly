const usersModel = require('../models/Users_Model');

const find = (id) => {
    return usersModel.getUsersSpecific(id);
}

const findAll = () => {
    return usersModel.getUsers();
}

const create = (req) => {
    return usersModel.addUsers(req);
}

const update = (req) => {
    return usersModel.updateUsers(req);
}

const del = (id) => {
    return usersModel.delUsers(id);
}

module.exports = {
    find, findAll, create, update, del
  };