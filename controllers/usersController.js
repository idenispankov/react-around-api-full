const { JWT_SECRET } = process.env;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Login Handler
const login = (req, res) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (user) {
        res.status(200).send({
          token: jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
          }),
        });
      }
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

// Create User Handler
const createUser = (req, res) => {
  const { email, password, name, about, avatar } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name, about, avatar }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
      });
    })
    .catch((err) => res.status(400).send({ message: err.message }));
};

// Get All Users
const getUsers = (req, res) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send({ message: err }));
};

// Get Current User
const getCurrenUser = (req, res) => {
  User.findById({ _id: req.user._id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not Found" });
      }
      res.status(200).send({
        _id: user._id,
        email: user.email,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
      });
    })
    .catch((err) => res.status(400).send({ message: err.message }));
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
  getCurrenUser,
};
