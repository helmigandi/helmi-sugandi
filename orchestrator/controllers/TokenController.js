const { generateJwt } = require("../helpers/jwt");

class TokenController {
  static generateToken(req, res) {
    const access_token = generateJwt();
    res.status(200).json({ access_token });
  }
}

module.exports = TokenController;
