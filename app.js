const helmet = require("helmet");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const notFoundRouter = require("./routes/notFound");

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

app.use("/", usersRouter);
app.use("/", cardsRouter);
app.use("/", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
