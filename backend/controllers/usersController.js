const bcrypt = require("bcryptjs");
const User = require("../models/user");

const login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      if (!matched) {
        return Promise.reject(new Error("Incorrect password or email"));
      }
      res.send({ message: "Everything good!" });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

const getUsers = (req, res) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send({ message: err }));
};

const getSingleUser = (req, res) => {
  return User.findById({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not Found" });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send(err.message);
    });
};

const createUser = (req, res) => {
  const { email, password, name, about, avatar } = req.body;
  return bcrypt
    .hash(password, 10)
    .then((hash) => {
      return User.create({ email, password: hash, name, about, avatar });
    })
    .then((user) => {
      res.status(201).send({ _id: user._id, email: user.email });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User Not Found" });
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

function updateAvatar(req, res) {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User Not Found" });
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
  login,
};
