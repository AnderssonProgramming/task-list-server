const express = require("express");
const tasks = require("./tasks-data");

const router = express.Router();

// POST /tasks - create a new task
router.post("/", (req, res) => {
  const { description, isCompleted } = req.body;

  if (!description) {
    return res.status(400).json({ error: "description is required" });
  }

  const newTask = {
    id: Date.now(),
    isCompleted: Boolean(isCompleted),
    description,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - update a specific task
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

  const { description, isCompleted } = req.body;

  if (description !== undefined) task.description = description;
  if (isCompleted !== undefined) task.isCompleted = Boolean(isCompleted);

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
