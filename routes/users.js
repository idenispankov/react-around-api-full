const express = require("express");

const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
  login,
} = require("../controllers/usersController");

// Create User
router.post("/signup", createUser);

// Login User
router.post("/signin", login);

// Get All Users
router.get("/users", getUsers);

// Get Single User
router.get("/users/:id", getSingleUser);

// Update User
router.patch("/users/:id", updateUser);

// Update Avatar
router.patch("/users/:id/avatar", updateAvatar);

module.exports = router;
