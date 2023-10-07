const router = require("express").Router();

//db
var pool = require('../query.js');
//authenticator
const {auth} = require('../middlewares/middleware.js');

router.get('/', (req, res) => {
  pool.query(
    `SELECT * FROM movies ${req.query.limit ? 'LIMIT ' + req.query.limit : ''} `,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

router.get('/:id', (req, res) => {
  pool.query(
    `SELECT * FROM movies WHERE id = ${req.params.id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

router.post('/', (req, res) => {
  pool.query(
    `INSERT INTO movies ("title", "genres", "year") VALUES ($1, $2, $3);`,
    [req.body.title, req.body.genres, req.body.year],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json({
        status: 'success',
      });
    }
  );
});

router.delete('/:id', auth, (req, res) => {
  pool.query(
    `DELETE FROM movies WHERE id = ${req.params.id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json({
        status: 'success',
      });
    }
  );
});

router.put('/:id', auth, (req, res) =>{
  pool.query(
    `UPDATE movies SET year = "${req.body.year}" WHERE id = ${req.params.id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json({
        status: 'success',
      });
    }
  );
});


module.exports = router;
