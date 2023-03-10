const Employee = require("../models/Employee.js");
const {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  assignTask,
  finishTask,
  getTop5,
} = require("../services/employeeServices.js");

const employeeController = require("express").Router();

employeeController.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newEmployee = await addEmployee(data);
    res.status(200).json(newEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.get("/", async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.get("/:id", async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.put("/update", async (req, res) => {
  try {
    const data = req.body;
    const updatedEmployee = await updateEmployee(data);
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.delete("/delete/:id", async (req, res) => {
  try {
    await deleteEmployee(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.post("/assign", async (req, res) => {
  try {
    const data = req.body;
    await assignTask(data);
    res.status(200).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.get("/task/:id", async (req, res) => {
  try {
    await finishTask(req.params.id);
    res.status(200).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

employeeController.get("/stats/five", async (req, res) => {
  try {
    const employees = await getTop5();
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = employeeController;
