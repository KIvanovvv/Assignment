import { useState } from "react";
import classes from "./TasksModal.module.css";

const TasksModal = ({ setModalVisible }) => {
  const [tasks, setTasks] = useState([]);
  //Fetch for all tasks
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.backdrop}
        onClick={() => setModalVisible(false)}
      ></div>
      <div className={classes.container}>
        <div className={classes.headline}>
          <p>Available tasks</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default TasksModal;
