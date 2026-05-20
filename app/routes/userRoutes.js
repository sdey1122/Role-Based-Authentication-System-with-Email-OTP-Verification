const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const userController = require("../controllers/userController");

// User Profile Route
router.get("/profile", authMiddleware, userController.profile);

// Admin Route
router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  userController.adminDashboard,
);

module.exports = router;
