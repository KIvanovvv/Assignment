const {
  createTask,
  getAllTasks,
  updateTaskStatus,
  getTasksById,
  updateTask,
} = require("../services/taskService.js");

const taskController = require("express").Router();

taskController.post("/add", async (req, res) => {
  try {
    const taskData = req.body;
    const newTask = createTask(taskData);
    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

taskController.get("/", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
taskController.get("/:id", async (req, res) => {
  try {
    const task = await getTasksById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

taskController.get("/update/:id", async (req, res) => {
  try {
    const task = await updateTaskStatus(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

taskController.put("/update", async (req, res) => {
  try {
    const taskData = req.body;
    const updatedTask = await updateTask(taskData);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = taskController;
