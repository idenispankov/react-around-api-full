const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const { errors } = require("celebrate");
const NotFoundError = require("./errors/NotFoundError");

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const notFoundRouter = require("./routes/notFound");
const auth = require("./middleware/auth");
const errorHandler = require("./errors/errorHandler");
const { requestLogger, errorLogger } = require("./middleware/logger");

const app = express();
const { PORT = 3000 } = process.env;

app.use(helmet());
app.use(auth);
app.use(errors());
app.use(errorHandler);
app.use("*", (req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});
app.use(requestLogger);
app.use(errorLogger);

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use("/", usersRouter);
app.use("/", cardsRouter);
app.use("/", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
