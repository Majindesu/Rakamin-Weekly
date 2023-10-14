const moviesRepo = require('../repo/Movies_Repo');

const get = (id) => {
    return moviesRepo.find(id);
}

const getAll = () => {
    return moviesRepo.findAll();
}

const addNew = (id) => {
    return moviesRepo.create(id);
}

const patch = (id) => {
    return moviesRepo.update(id);
}

const del = (id) => {
    return moviesRepo.del(id);
}

const uploadPhoto = (req) => {
    return moviesRepo.upload(req);
}

module.exports = {
    get, getAll, addNew, patch, del, uploadPhoto
  };