const helmet = require("helmet");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { celebrate, Joi } = require("celebrate");
const { errors } = require("celebrate");
const auth = require("./middleware/auth");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const { createUser, login } = require("./controllers/usersController");

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

mongoose.connect("mongodb://localhost:27017/arountheus", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(10),
    }),
  }),
  createUser
);

app.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(10),
    }),
  }),
  login
);

app.use("/", auth, usersRouter);
app.use("/", auth, cardsRouter);

app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
