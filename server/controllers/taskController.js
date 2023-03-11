const { createTask } = require("../services/taskService.js");

const taskController = require("express").Router()

taskController.post("/add",async(req,res)=>{
  try{
  const taskData = req.body;
  const newTask = createTask(taskData)
  res.status(200).json(newTask)
}catch(err){
  res.status(400).json({error:err.message})
}
})

module.exports = taskController