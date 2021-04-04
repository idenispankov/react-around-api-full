const express = require("express");
const { celebrate, Joi } = require("celebrate");

const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  login,
  updateUser,
  updateAvatar,
  getCurrentUser,
} = require("../controllers/usersController");

// Get All Users
router.get("/users", getUsers);

// Get Current User
router.get("/users/me", getCurrentUser);

// Get Single User By Id
router.get(
  "/users/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().hex().length(24),
    }),
  }),
  getSingleUser
);

// Create User
router.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(10),
    }),
  }),
  createUser
);

// Login
router.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(10),
    }),
  }),
  login
);

// Update User
router.patch(
  "/users/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(40),
      about: Joi.string().required().max(200),
    }),
  }),
  updateUser
);

// Update Avatar
router.patch(
  "/users/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string()
        .uri({ scheme: ["http", "https"] })
        .required(),
    }),
  }),
  updateAvatar
);

module.exports = router;
