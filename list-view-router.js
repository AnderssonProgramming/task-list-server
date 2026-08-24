const express = require("express");
const tasks = require("./tasks-data");

const router = express.Router();

// Middleware: validates the :status param
function validateStatusParam(req, res, next) {
  const { status } = req.params;

  if (status !== "completed" && status !== "incomplete") {
    return res
      .status(400)
      .json({ error: "status param must be 'completed' or 'incomplete'" });
  }

  next();
}

// Middleware: validates the :id param
function validateIdParam(req, res, next) {
  const { id } = req.params;

  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: "id param must be a valid number" });
  }

  next();
}

// GET /tasks - list all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// GET /tasks/status/:status - filter tasks by completed or incomplete
router.get("/status/:status", validateStatusParam, (req, res) => {
  const { status } = req.params;
  const isCompleted = status === "completed";
  const filteredTasks = tasks.filter((task) => task.isCompleted === isCompleted);
  res.json(filteredTasks);
});

// GET /tasks/:id - get a specific task
router.get("/:id", validateIdParam, (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

  res.json(task);
});

module.exports = router;
