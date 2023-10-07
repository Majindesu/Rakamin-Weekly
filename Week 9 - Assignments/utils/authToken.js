const jwt = require("jsonwebtoken");

exports.authToken = (data) => {
  return jwt.sign(data, "passwordadministrator1");
};