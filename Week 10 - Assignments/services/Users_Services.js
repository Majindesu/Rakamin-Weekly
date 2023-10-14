const usersRepo = require('../repo/Users_Repo');

const get = (id) => {
    return usersRepo.find(id);
}

const getAll = () => {
    return usersRepo.findAll();
}

const addNew = (id) => {
    return usersRepo.create(id);
}

const patch = (id) => {
    return usersRepo.update(id);
}

const del = (id) => {
    return usersRepo.del(id);
}

module.exports = {
    get, getAll, addNew, patch, del
  };