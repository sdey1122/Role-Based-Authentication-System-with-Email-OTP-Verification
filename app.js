const express = require("express");
require("dotenv").config();
const connectDB = require("./app/config/db");
const routes = require("./app/routes");
const app = express();

// Connect database
connectDB();
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Role-Based Authentication API Running Successfully",
  });
});
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
