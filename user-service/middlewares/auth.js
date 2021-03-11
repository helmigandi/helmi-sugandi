const { verifyJwt } = require("../helpers/jwt.js");

function authorization(req, res, next) {
  try {
    req.authorizedUser = verifyJwt(req.headers.access_token);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { authorization };
