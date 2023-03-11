const app = require("./config/express.js");
const runDB = require("./config/database.js");
const employeeController = require("./controllers/employeeController.js");
const taskController = require("./controllers/taskController.js");

app.get("/", (req, res) => {
  res.send(`Server is running...`);
});

app.use("/employees", employeeController);
app.use("/tasks", taskController);

start();
async function start() {
  app.listen(5000, () => console.log(`Server is running on port 5000...`));
  runDB();
}
