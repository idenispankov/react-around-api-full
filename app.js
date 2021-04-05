const helmet = require("helmet");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
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

app.post("/signup", createUser);
app.post("/signin", login);

app.use("/", auth, usersRouter);
app.use("/", auth, cardsRouter);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
