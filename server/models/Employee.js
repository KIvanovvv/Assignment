const { Schema, model, Types } = require("mongoose");

const employeeSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  birth: { type: String, required: true },
  salary: { type: String, required: true },
  tasks: { type: [Types.ObjectId], default: [], ref: "Task" },
  finishedTasks: { type: Number, default: 0 },
});

const Employee = model("Employee", employeeSchema);

module.exports = Employee;
