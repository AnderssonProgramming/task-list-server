require("dotenv").config();
const express = require("express");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");
const authRouter = require("./auth-router");
const authenticateToken = require("./auth-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

const ALLOWED_METHODS = ["GET", "POST", "PUT", "DELETE"];

// Application-level middleware: rejects requests using unsupported HTTP methods
app.use((req, res, next) => {
  if (!ALLOWED_METHODS.includes(req.method)) {
    return res
      .status(405)
      .json({ error: `HTTP method ${req.method} is not allowed` });
  }
  next();
});

app.use(express.json());

app.use(authRouter);
app.use("/tasks", authenticateToken, listViewRouter);
app.use("/tasks", authenticateToken, listEditRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
