const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "401, Authorization Required" });
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, "super-strong-secret");
  } catch (err) {
    return res.status(401).send({ message: "401, Authorization Required" });
  }

  req.user = payload;

  next();
};
