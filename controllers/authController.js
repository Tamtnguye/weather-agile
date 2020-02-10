const jwt = require("jsonwebtoken");

function generateToken(user) {
    const payload = JSON.stringify(user);
    return jwt.sign(payload, process.env.JWT); // TODO: Secret in env var
}

module.exports = { generateToken };