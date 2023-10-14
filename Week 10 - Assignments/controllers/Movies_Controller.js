const moviesServices = require('../services/Movies_Services');
const { BadRequestError, InternalServerError, NotFoundError, } = require('../middlewares/Error_Handler');

const readMovies = async (req, res) => {
  try {
    const movies = await moviesServices.getAll();
    res.status(200).json({
      status: 'success',
      data: movies,
    });
  } catch (error) {
        throw new InternalServerError('Error: Internal Server Error')
  }
};

const readMoviesSpecific = async (req, res) => {
    try {
      const id = req.params.id;
      const movie = await moviesServices.get(id);
      if (movie) {
        res.status(200).json({
          status: 'success',
          data: movie,
        });
      } else {
            throw new NotFoundError('Error: Not Found')
      }
    } catch (error) {
            throw new NotFoundError('Error: Not Found')
    }
  };

const createMovies = async (req, res) => {
  try {
    const movies = await moviesServices.addNew(req);

    res.status(201).json({
      status: 'success',
      data: movies,
    });
  } catch (error) {
        throw new BadRequestError('Error: Bad Request')
  }
};

const uploadPhotos = async (req, res) => {
    try {
      const file = req.file ? req.file.path : null;
      if (!file) {
        res.status(400).json({ 
          status: 'error',
          message: 'No file selected.',
        });
        return;
      }
      
      const photos = await moviesServices.uploadPhoto(req);
      res.status(201).json({
        status: 'success',
        data: photos,
      });
    } catch (error) {
        throw new InternalServerError('Error: Internal Server Error')
    }
  };

const updateMovies = async (req, res) => {
    try {
      const id = req.params.id;
      const movies = await moviesServices.patch(req);
      res.status(200).json({
        status: 'success',
        data: movies,
      });
    } catch (error) {
        throw new BadRequestError('Error: Bad Request')
    }
};

const deleteMovies = async (req, res) => {
    try {
      const id = req.params.id;
      await moviesServices.del(id);
      res.status(200).json({
        status: 'success',
        message: 'Movie successfully deleted!',
      });
    } catch (error) {
        throw new InternalServerError('Error: Internal Server Error')
    }
};

module.exports = {
  readMovies,
  readMoviesSpecific,
  createMovies,
  updateMovies,
  deleteMovies,
  uploadPhotos
};