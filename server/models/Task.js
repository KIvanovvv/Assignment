const { Schema, model, Types } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignee: { type: [Types.ObjectId], default:[],ref:"Employee"},
  dueDate: { type: String, required: true },
  
});

const Task = model("Task", taskSchema);

module.exports = Task;