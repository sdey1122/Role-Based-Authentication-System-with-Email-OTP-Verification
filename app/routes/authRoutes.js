// Import express
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register Route
router.post("/register", authController.register);

// Verify OTP Route
router.post("/verify-otp", authController.verifyOTP);

// Resend OTP Route
router.post("/resend-otp", authController.resendOTP);

// Login Route
router.post("/login", authController.login);

// Logout Route
router.post("/logout", authController.logout);

module.exports = router;
