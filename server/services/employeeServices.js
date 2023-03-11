const Employee = require("../models/Employee.js");

async function addEmployee(data) {
  const newEmployee = await Employee.create({
    ...data,
  });
  return newEmployee;
}

async function getAllEmployees() {
  const employees = await Employee.find({});
  return employees;
}

async function getEmployeeById(id) {
  const employee = await Employee.findById(id);
  return employee;
}

async function updateEmployee(data) {
  const filter = { _id: data._id };
  const employee = await Employee.findOneAndUpdate(filter, data, {
    new: true,
  });
  return employee;
}

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
};
