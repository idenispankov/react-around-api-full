const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const notFoundRouter = require("./routes/notFound");
const auth = require("./middleware/auth");

const app = express();
const { PORT = 3000 } = process.env;

app.use(helmet());

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(auth);

app.use("/", usersRouter);
app.use("/", cardsRouter);
app.use("/", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
