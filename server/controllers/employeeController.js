const {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
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

module.exports = employeeController;
