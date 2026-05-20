const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

// Auth Routes
router.use("/api/auth", authRoutes);

// User Routes
router.use("/api/user", userRoutes);

module.exports = router;
