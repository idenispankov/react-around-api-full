const express = require("express");

const router = express.Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  updateAvatar,
  getCurrenUser,
} = require("../controllers/usersController");

// Get All Users
router.get("/users", getUsers);

// Get Single User
router.get("/users/:id", getSingleUser);

// GetCurrentUser
router.get("/users/me", getCurrenUser);

// Update User
router.patch("/users/:id", updateUser);

// Update Avatar
router.patch("/users/:id/avatar", updateAvatar);

module.exports = router;
