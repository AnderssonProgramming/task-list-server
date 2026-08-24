const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("./users-data");
const authenticateToken = require("./auth-middleware");

const router = express.Router();

// POST /login - authenticates a predefined user and issues a JWT
router.post("/login", (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "username and password are required" });
  }

  const user = users.find((u) => u.username === username);
  const isPasswordValid =
    !!user && bcrypt.compareSync(password, user.passwordHash);

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
  );

  res.json({ token });
});

// GET /profile - protected route, requires a valid JWT
router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

module.exports = router;
