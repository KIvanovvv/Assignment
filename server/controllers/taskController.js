const { createTask, getAllTasks } = require("../services/taskService.js");

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

taskController.get("/", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = taskController