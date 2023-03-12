import { useEffect, useState } from "react";
import { assignTaskToEmployee } from "../../services/employeeServices.js";
import Button from "./Button.js";
import classes from "./TaskModalList.module.css";

const TaskModalList = ({ task, employeeId, setModalVisible, setUpdated }) => {
  const [loading, setLoading] = useState(false);
  const [alreadyAssigned, setAlreadyAssigned] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task.assignee.includes(employeeId)) {
      setAlreadyAssigned(true);
    }
    if (task.status === "Completed") {
      setCompleted(true);
    }
  }, []);

  const onAssignHandler = async () => {
    setLoading(true);
    await assignTaskToEmployee(employeeId, task._id);
    setLoading(false);
    setModalVisible(false);
    setUpdated((curr) => !curr);
  };
  return (
    <li className={classes.list}>
      <div className={classes.headline}>
        <p>{task.title}</p>
      </div>
      <div className={classes.main}>
        <p className={classes.description}>{task.description}</p>
        <p className={classes.date}>
          Has to be finished before: {task.dueDate}
        </p>
      </div>
      <Button
        className={classes.btn_assign}
        onClick={onAssignHandler}
        disabled={alreadyAssigned || completed}
      >
        {alreadyAssigned
          ? completed
            ? "Completed"
            : "Assigned"
          : completed
          ? "Completed"
          : "Assign"}
      </Button>
    </li>
  );
};

export default TaskModalList;
