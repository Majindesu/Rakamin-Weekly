const pool = require('../configs/database');

const getUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const getUsersSpecific = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
}

const addUsers = (req) => {
  return new Promise((resolve, reject) => {
    const { email, gender, password, role } = req.body;

    if (!email || !gender || !password || !role) {
      reject('Please specify email, gender, password and role.');
      return;
    }

    pool.query(
      'INSERT INTO users ("email", "gender", "password", "role") VALUES ($1, $2, $3, $4)',
      [email, gender, password, role],
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

const updateUsers = (req) => {
    return new Promise((resolve, reject) => {
        const { email, gender, password, role } = req.body;
        const id = req.params.id;

        if (!email || !gender || !password || !role) {
            reject('Please specify email, gender, password and role.');
            return;
        }

        pool.query('UPDATE users SET email=$1, gender=$2, password=$3, role=$4 WHERE id=$5', [email, gender, password, role, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        });
    });
}

const delUsers = (id) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
}

module.exports = {
  getUsers,
  getUsersSpecific,
  addUsers,
  updateUsers,
  delUsers
};