const {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
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

employeeController.get("/:id", async (req, res) => {
  const employee = await getEmployeeById(req.params.id);
  res.status(200).json(employee);
});

employeeController.put("/update", async (req, res) => {
  const data = req.body;
  const updatedEmployee = await updateEmployee(data);
  res.status(200).json(updatedEmployee);
});

module.exports = employeeController;
