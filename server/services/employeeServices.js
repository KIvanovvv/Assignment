const Employee = require("../models/Employee.js");

async function AddEmployee(data) {
  const newEmployee = await Employee.create({
    ...data,
  });
  return newEmployee;
}

module.exports = {
  AddEmployee,
};
