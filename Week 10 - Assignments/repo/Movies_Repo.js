const moviesModel = require('../models/Movies_Model'); 

const find = (id) => {
    return moviesModel.getMoviesSpecific(id);
}

const findAll = () => {
    return moviesModel.getMovies();
}

const create = (req) => {
    return moviesModel.addMovies(req);
}

const update = (req) => {
    return moviesModel.updateMovies(req);
}

const del = (id) => {
    return moviesModel.delMovies(id);
}

const upload = (req) => {
    return moviesModel.addPhotoMovies(req)
}

module.exports = {
    find, findAll, create, update, del, upload
  };