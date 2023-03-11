import { useEffect, useState } from "react";
import { getEmployeesOnTask } from "../../services/taskService.js";
import Button from "./Button.js";
import classes from "./TaskDetailsModal.module.css";

const TaskDetailsModal = ({ setModalVisible, taskId }) => {
  const [employees, setEmployees] = useState([]);
  console.log(taskId);
  //Fetch with taskId
  useEffect(() => {
    (async function fetchEmployees() {
      setEmployees(await getEmployeesOnTask(taskId));
    })();
  }, []);
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.backdrop}
        onClick={() => setModalVisible(false)}
      ></div>
      <div className={classes.container}>
        <div className={classes.headline}>
          <p>Employees working on task</p>
        </div>
        <ul className={classes.list_ul}>
          {employees.map((x) => {
            return (
              <li key={x._id} className={classes.list_li}>
                <p>
                  <span className={classes.tag}>Name: </span>
                  {x.fullName}
                </p>
                <p>
                  <span className={classes.tag}>Email: </span>
                  {x.email}
                </p>
                <p>
                  <span className={classes.tag}>Phone: </span>
                  {x.phoneNumber}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
