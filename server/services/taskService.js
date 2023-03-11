const Task = require("../models/Task.js");

async function createTask(data) {
  const newTask = await Task.create({
    ...data,
  });
  return newTask;
}
async function getAllTasks() {
  const tasks = await Task.find({});
  return tasks;
}

async function updateTaskStatus(id) {
  const task = await Task.findById(id);
  task.status = "Completed";
  await task.save();
  return task;
}
module.exports = {
  createTask,
  getAllTasks,
  updateTaskStatus,
};
