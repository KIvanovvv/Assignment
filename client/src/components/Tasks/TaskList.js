import Button from "../Utils/Button.js";
import classes from "./TaskList.module.css";

const TaskList = ({ task }) => {
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
          <Button className={classes.btn}>Details</Button>
        </div>

        <p className={classes.date}>
          Has to be finished before: {task.dueDate}
        </p>
      </div>
    </li>
  );
};

export default TaskList;
