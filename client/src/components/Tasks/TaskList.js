import { useState } from "react";
import Button from "../Utils/Button.js";
import ButtonLink from "../Utils/ButtonLink.js";
import classes from "./TaskList.module.css";

const TaskList = ({ task, setModalVisible, setTaskId }) => {
  const [removeActive, setRemoveActive] = useState(false);
  let statusStyle;
  switch (task.status) {
    case "Not Started":
      statusStyle = classes.status_notstarted;
      break;
    case "In Progress":
      statusStyle = classes.status_inprogress;
      break;
    case "Completed":
      statusStyle = classes.status_completed;
      break;
  }
  const detailsHandler = () => {
    setModalVisible(true);
    setTaskId(task._id);
  };

  return (
    <li className={classes.list}>
      <div className={classes.headline}>
        <p>{task.title}</p>
      </div>
      <div className={classes.main}>
        <p className={classes.description}>{task.description}</p>
        <div className={classes.currently_working}>
          <p>
            Employees working on task <span>{task.assignee.length}</span>
          </p>
          <Button className={classes.btn} onClick={detailsHandler}>
            Details
          </Button>
        </div>

        <p className={classes.date}>
          Has to be finished before: {task.dueDate}
        </p>
        <div className={statusStyle}>
          <p>Status: {task.status}</p>
        </div>
        <div className={classes.action}>
          <Button
            className={classes.btn}
            onClick={() => setRemoveActive(true)}
            disabled={removeActive}
          >
            Remove
          </Button>
          <ButtonLink
            to={`/tasks/edit/${task._id}`}
            className={classes.btn}
            disabled={removeActive}
          >
            Edit
          </ButtonLink>
        </div>
        {removeActive && (
          <div className={classes.delete_wrapper}>
            <p>Are you sure ?</p>
            <div className={classes.action_delete}>
              <Button className={classes.btn_yes}>Yes</Button>
              <Button
                className={classes.btn_no}
                onClick={() => setRemoveActive(false)}
              >
                No
              </Button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskList;
