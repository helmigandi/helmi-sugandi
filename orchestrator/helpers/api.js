function generateUrl() {
  return process.env.USER_SERVICE_URL || "http://localhost:4001";
}

module.exports = generateUrl;
