import { useState } from "react";

import ButtonLink from "../Utils/ButtonLink.js";
import classes from "./EmployeeList.module.css";

const EmployeeList = ({ employee }) => {
  const [activeTasks, setActiveTasks] = useState(
    employee.tasks.filter((task) => task.status !== "Completed").length
  );

  let taskStyle;
  if (activeTasks <= 1) {
    taskStyle = classes.tag_tasks_light;
  } else if (activeTasks === 2) {
    taskStyle = classes.tag_tasks_medium;
  } else if (activeTasks >= 3) {
    taskStyle = classes.tag_tasks_overwhelmed;
  }
  return (
    <li className={classes.list}>
      <div className={classes.personal}>
        <p>
          <span className={classes.tag}>Name: </span>
          {employee.fullName}
        </p>
        <p>
          {" "}
          <span className={classes.tag}>Birth: </span>
          {employee.birth}
        </p>
      </div>
      <div className={classes.contacts}>
        <p>
          {" "}
          <span className={classes.tag}>Email: </span>
          {employee.email}
        </p>
        <p>
          {" "}
          <span className={classes.tag}>Phone: </span>
          {employee.phoneNumber}
        </p>
      </div>
      <div className={classes.company}>
        <p>
          {" "}
          <span className={classes.tag}>Salary: </span>${employee.salary}
        </p>
        <p className={classes.tasks_counter}>
          Working on {<span className={taskStyle}>{activeTasks}</span>} tasks
        </p>
      </div>
      <div className={classes.action}>
        <ButtonLink to={`/edit/${employee._id}`} className={classes.btn}>
          Edit
        </ButtonLink>
        <ButtonLink to={`/tasks/${employee._id}`} className={classes.btn}>
          Tasks
        </ButtonLink>
      </div>
    </li>
  );
};

export default EmployeeList;
