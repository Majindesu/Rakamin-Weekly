const db = require("../query.js");
const { authToken } = require('../utils/authToken.js');

const register = (req, res) => {
    const { email, gender, password, role } = req.body;
    const query = "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4)";
    db.query(query, [email, gender, password, role], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        return res.json(result);
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT email, password FROM users WHERE email=$1 AND password=$2";
    
    db.query(query, [email, password], (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }
    
        console.log(result.rows[0])
        const token = authToken(result.rows[0])
    
        return res.json({token});
      });
};

module.exports = { register,login };