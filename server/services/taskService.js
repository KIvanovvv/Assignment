const Task = require("../models/Task.js");

async function createTask(data) {
  const newTask = await Task.create({
    ...data,
  });
  return newTask;
}

module.exports = {
  createTask
};
