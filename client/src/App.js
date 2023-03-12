import { Link } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Employees from "./components/Employees/Employees.js";
import Tasks from "./components/Tasks/Tasks.js";
import EditEmployee from "./components/EditEmployee/EditEmployee.js";
import EmployeeTask from "./components/EmployeeTasks/EmployeeTask.js";
import AddEmployee from "./components/AddEmployee/AddEmployee.js";
import AddTask from "./components/AddTask/AddTask.js";
import EditTask from "./components/EditTask/EditTask.js";
import Statistic from "./components/Statistic/Statistic.js";

function App() {
  return (
    <div className={classes.body}>
      <div className={classes.headline}>
        <Link to={"/"} className={classes.headline_text}>
          Employee Manager
        </Link>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/add" element={<AddTask />} />
        <Route path="/tasks/edit/:taskId" element={<EditTask />} />
        <Route path="/tasks/:employeeId" element={<EmployeeTask />} />
        <Route path="/edit/:employeeId" element={<EditEmployee />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
