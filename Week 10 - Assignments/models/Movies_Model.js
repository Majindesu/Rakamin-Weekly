const pool = require('../configs/database');

const getMovies = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM movies', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const getMoviesSpecific = (id) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows[0]);
        }
      });
    });
  }

const addMovies = (req) => {
  return new Promise((resolve, reject) => {
    const { title, genres, year } = req.body;

    if (!title || !genres || !year) {
      reject('Title, genres, and year are required fields.');
      return;
    }

    pool.query(
      'INSERT INTO movies ("title", "genres", "year") VALUES ($1, $2, $3)',
      [title, genres, year],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      }
    );
  });
};

const addPhotoMovies = (req) => { 
    return new Promise((resolve, reject) => {
        const file = req.file.path;
        const id = req.params.id;
        const photo = file.slice(-40);

        console.log(file);
        if (!file) {
            reject('Please select file to upload')
            return
        }

        pool.query('UPDATE movies SET photo=$1 WHERE id=$2', [photo, id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(`Photo uploaded to ${photo}`)
            }
        });
    })
}

const updateMovies = (req) => {
    return new Promise((resolve, reject) => {
        const { title, genres, year } = req.body;
        const id = req.params.id;

        if (!title || !genres || !year) {
            reject('Title, genres, and year are required fields.');
            return;
        }

        pool.query('UPDATE movies SET title=$1, genres=$2, year=$3 WHERE id=$4', [title, genres, year, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        });
    });
}

const delMovies = (id) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
}

module.exports = {
  getMovies,
  getMoviesSpecific,
  addMovies,
  updateMovies,
  delMovies,
  addPhotoMovies
};