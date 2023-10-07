const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      message: "Credentials are Invalid"
    })
  }

  const decodeToken = jwt.verify(token, 'passwordadministrator1')

  req.user.id = decodeToken.id

  if (decodeToken.role !== 'admin') {
    return res.status(403).json({
      message: "User not authorized"
    })
  }

  next()
}