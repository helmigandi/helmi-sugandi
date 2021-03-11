const jwt = require("jsonwebtoken");
SECRET_KEY = process.env.JWT_KEY;

function verifyJwt(token) {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
}

module.exports = { verifyJwt };
