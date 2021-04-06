const jwt = require("jsonwebtoken");
require("dotenv").config();
const UnauthorizedError = require("../errors/UnauthorizedError");

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    next(new UnauthorizedError("Authorization Required"));
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError("Authorization Required"));
  }

  req.user = payload;

  next();
};
