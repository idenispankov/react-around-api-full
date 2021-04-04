/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const NotFoundError = require("../errors/NotFoundError");

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (user) {
        res.status(200).send({
          token: jwt.sign({ _id: user._id }, "some-secret-key", {
            expiresIn: "7d",
          }),
        });
      }
    })
    .catch(next);
};

const getUsers = (req, res, next) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

function getCurrentUser(req, res, next) {
  return User.findById({ _id: req.user._id })
    .then((user) => {
      if (!user) throw new NotFoundError("User Not Found");
      else {
        res.status(200).send({
          _id: user._id,
          email: user.email,
          name: user.name,
          about: user.about,
          avatar: user.avatar,
        });
      }
    })
    .catch(next);
}

const getSingleUser = (req, res, next) => {
  return User.findById({ _id: req.params.id })
    .then((user) => {
      if (!user) throw new NotFoundError("User Not Found");
      res.status(200).send(user);
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const { email, password, name, about, avatar } = req.body;

  return bcrypt
    .hash(password, 10)
    .then((hash) => {
      return User.create({ email, password: hash, name, about, avatar });
    })
    .then((user) => {
      res.status(201).send({ _id: user._id, email: user.email });
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) throw new NotFoundError("User Not Found");
      res.status(200).send(user);
    })
    .catch(next);
};

function updateAvatar(req, res, next) {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) throw new NotFoundError("User Not Found");
      res.status(200).send(user);
    })
    .catch(next);
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
  login,
  getCurrentUser,
};
