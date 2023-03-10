import { Link } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Employees from "./components/Employees/Employees.js";
import Tasks from "./components/Tasks/Tasks.js";

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
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<p>Tasks for user</p>} />
        <Route path="*" element={<p>Not Found 404</p>} />
      </Routes>
    </div>
  );
}

export default App;
