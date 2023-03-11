const app = require("./config/express.js");
const runDB = require("./config/database.js");
const employeeController = require("./controllers/employeeController.js");

app.get("/", (req, res) => {
  res.send(`Server is running...`);
});

app.use("/employees", employeeController);

start();
async function start() {
  app.listen(5000, () => console.log(`Server is running on port 5000...`));
  runDB();
}
