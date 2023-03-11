import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTasksById, updateTask } from "../../services/taskService.js";
import Button from "../Utils/Button.js";
import classes from "./EditTask.module.css";

const EditTask = () => {
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { taskId } = useParams();

  const yearPattern =
    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/gm;

  useEffect(() => {
    (async function fetchTask() {
      setLoading(true);
      setTask(await getTasksById(taskId));
      setLoading(false);
    })();
  }, []);

  const onUpdateHandler = async () => {
    if (!task.title.trim()) {
      setError(`Title is required`);
      return;
    }
    if (!task.description.trim()) {
      setError(`Description is required`);
      return;
    }
    if (!task.dueDate.match(yearPattern)) {
      setError(`Date must be in dd/mm/yyyy format`);
      return;
    }
    setLoading(true);
    await updateTask(task);
    setLoading(false);
    navigate("/tasks");
  };

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>Edit task</p>
      </div>
      {error && (
        <div className={classes.error}>
          <p>{error}</p>
        </div>
      )}
      <div className={classes.content}>
        <div className={classes.title_wrapper}>
          <p className={classes.tag}>Title </p>
          <input
            type="text"
            value={task.title}
            className={classes.input}
            onClick={() => setError(null)}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div className={classes.description_wrapper}>
          <p className={classes.tag}>Description </p>
          <textarea
            type="text"
            value={task.description}
            className={classes.textarea}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.duedate_wrapper}>
          <p className={classes.tag}>Due Date </p>
          <input
            type="text"
            value={task.dueDate}
            className={classes.input}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            onClick={() => setError(null)}
          />
        </div>
      </div>
      <div className={classes.action}>
        <Button className={classes.btn} onClick={onUpdateHandler}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditTask;
