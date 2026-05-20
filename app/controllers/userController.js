class UserController {
  // User Profile Route
  async profile(req, res) {
    return res.status(200).json({
      success: true,
      message: "User Profile",
      user: req.user,
    });
  }

  // Admin Protected Route
  async adminDashboard(req, res) {
    return res.status(200).json({
      success: true,
      message: "Welcome Admin",
    });
  }
}

module.exports = new UserController();
