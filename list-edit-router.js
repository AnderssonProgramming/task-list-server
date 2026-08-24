const express = require("express");
const tasks = require("./tasks-data");

const router = express.Router();

const ALLOWED_FIELDS = ["description", "isCompleted"];

// Middleware: validates the request body for POST and PUT requests
function validateTaskBody(req, res, next) {
  const isEmptyBody = !req.body || Object.keys(req.body).length === 0;

  if (isEmptyBody) {
    return res.status(400).json({ error: "Request body cannot be empty" });
  }

  const bodyFields = Object.keys(req.body);
  const hasInvalidFields = bodyFields.some(
    (field) => !ALLOWED_FIELDS.includes(field)
  );

  if (hasInvalidFields) {
    return res
      .status(400)
      .json({ error: "Request body contains invalid attributes" });
  }

  const { description, isCompleted } = req.body;

  if (req.method === "POST" && description === undefined) {
    return res.status(400).json({ error: "description is required" });
  }

  if (
    description !== undefined &&
    (typeof description !== "string" || description.trim() === "")
  ) {
    return res
      .status(400)
      .json({ error: "description must be a non-empty string" });
  }

  if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
    return res.status(400).json({ error: "isCompleted must be a boolean" });
  }

  next();
}

// POST /tasks - create a new task
router.post("/", validateTaskBody, (req, res) => {
  const { description, isCompleted } = req.body;

  const newTask = {
    id: Date.now(),
    isCompleted: Boolean(isCompleted),
    description,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - update a specific task
router.put("/:id", validateTaskBody, (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

  const { description, isCompleted } = req.body;

  if (description !== undefined) task.description = description;
  if (isCompleted !== undefined) task.isCompleted = isCompleted;

  res.json(task);
});

// DELETE /tasks/:id - delete a specific task
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

  const [deletedTask] = tasks.splice(index, 1);
  res.json(deletedTask);
});

module.exports = router;
