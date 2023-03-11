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

module.exports = {
  addEmployee,
  getAllEmployees,
};
