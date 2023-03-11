const { AddEmployee } = require("../services/employeeServices.js");

const employeeController = require("express").Router();

employeeController.post("/add", async (req, res) => {
  const data = req.body;
  const newEmployee = await AddEmployee(data);
  res.status(200).json(newEmployee);
});

module.exports = employeeController;
