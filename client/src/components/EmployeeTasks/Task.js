import { useState } from "react";
import Button from "../Utils/Button.js";
import classes from "./Task.module.css";

const Task = (props) => {
  const [task, setTask] = useState(props.task);
  const [taskStatus, setTaskStatus] = useState(task.status === "Completed");
  const onCompleteHandler = () => {
    //Fetch and update status
  };
  const statusStyle = taskStatus ? classes.completed : classes.btn;
  return (
    <li className={classes.list}>
      <div className={classes.title}>
        <p>{task.title}</p>
      </div>
      <div className={classes.description}>
        <p>{task.description}</p>
      </div>
      <div className={classes.status}>
        <div
          className={
            taskStatus ? classes.status_completed : classes.status_inprogress
          }
        >
          <p>
            <span className={classes.span_status}>Status: </span>
            {task.status}
          </p>
        </div>

        <Button
          className={statusStyle}
          onClick={onCompleteHandler}
          disabled={taskStatus}
        >
          {taskStatus ? "Completed" : "Complete"}
        </Button>
      </div>
      <div className={classes.dueDate}>
        <p>
          <span className={classes.data_span}>Due date: </span>
          {task.dueDate}
        </p>
      </div>
    </li>
  );
};
export default Task;
