const {
  addEmployee,
  getAllEmployees,
} = require("../services/employeeServices.js");

const employeeController = require("express").Router();

employeeController.post("/add", async (req, res) => {
  const data = req.body;
  const newEmployee = await addEmployee(data);
  res.status(200).json(newEmployee);
});

employeeController.get("/", async (req, res) => {
  const employees = await getAllEmployees();
  res.status(200).json(employees);
});

module.exports = employeeController;
