const express = require("express");

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

// Get Single User By Id
router.get("/users/:id", getSingleUser);

// Get Current User
router.get("/users/me", getCurrentUser);

// Create User
router.post("/signup", createUser);

// Login
router.post("/signin", login);

// Update User
router.patch("/users/:id", updateUser);

// Update Avatar
router.patch("/users/:id/avatar", updateAvatar);

module.exports = router;
