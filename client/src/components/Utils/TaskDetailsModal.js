import { useState } from "react";
import classes from "./TaskDetailsModal.module.css";

const TaskDetailsModal = ({ setModalVisible, taskId }) => {
  const [employees, setEmployees] = useState([]);
  console.log(taskId);
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.backdrop}
        onClick={() => setModalVisible(false)}
      ></div>
      <div className={classes.container}>
        <div className={classes.headline}>
          <p>Employees working on task</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
