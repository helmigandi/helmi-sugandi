const jwt = require("jsonwebtoken");
SECRET_KEY = process.env.JWT_KEY;

function generateJwt() {
  // 26859467879631251615372947948
  const randomKey =
    Math.random().toString().slice(2) + new Date().getTime().toString();
  const token = jwt.sign({ signKey: randomKey }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
}

module.exports = { generateJwt };
