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

async function getTasksById(id) {
  const task = await Task.findById(id);
  return task;
}

async function updateTaskStatus(id) {
  const task = await Task.findById(id);
  task.status = "Completed";
  await task.save();
  return task;
}

async function updateTask(data) {
  const filter = { _id: data._id };
  const task = await Task.findByIdAndUpdate(filter, data, {
    new: true,
  });
  return task;
}
async function deleteTask(id) {
  await Task.findByIdAndDelete(id);
}

async function getEmployeesOnTask(taskId) {
  const task = await Task.findById(taskId).populate("assignee");
  return task.assignee;
}

module.exports = {
  createTask,
  getAllTasks,
  updateTaskStatus,
  getTasksById,
  updateTask,
  deleteTask,
  getEmployeesOnTask,
};
