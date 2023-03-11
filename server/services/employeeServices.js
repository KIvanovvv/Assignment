const Employee = require("../models/Employee.js");
const Task = require("../models/Task.js");

async function addEmployee(data) {
  const newEmployee = await Employee.create({
    ...data,
  });
  return newEmployee;
}

async function getAllEmployees() {
  const employees = await Employee.find({}).populate("tasks");
  return employees;
}

async function getEmployeeById(id) {
  const employee = await Employee.findById(id).populate("tasks");
  return employee;
}

async function updateEmployee(data) {
  const filter = { _id: data._id };
  const employee = await Employee.findOneAndUpdate(filter, data, {
    new: true,
  });
  return employee;
}

async function deleteEmployee(id) {
  const filter = { _id: id };
  await Employee.findOneAndDelete(filter);
}

async function assignTask(data) {
  const { employeeId, taskId } = data;
  const employee = await Employee.findById(employeeId);
  const task = await Task.findById(taskId);
  employee.tasks.push(task);
  await employee.save();
  task.assignee.push(employee);
  task.status = "In Progress";
  await task.save();
}

async function finishTask(employeeId) {
  const employee = await Employee.findById(employeeId);
  employee.finishedTasks++;
  await employee.save();
}

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  assignTask,
  finishTask,
};
