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
module.exports = {
  createTask,
  getAllTasks
};
