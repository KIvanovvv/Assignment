import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../services/taskService.js";
import Button from "../Utils/Button.js";
import classes from "./AddTask.module.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const yearPattern =
    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/gm;
  //TODO validation, POST, redirect to Tasks
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDueDateHandler = (e) => {
    setDueDate(e.target.value);
  };
  const onAddHandler = async () => {
    if (!title.trim()) {
      setError(`Title is required`);
      return;
    }
    if (!description.trim()) {
      setError(`Description is required`);
      return;
    }
    if (!dueDate.match(yearPattern)) {
      setError(`Date must be in dd/mm/yyyy format`);
      return;
    }
    setLoading(true);
    await createTask({ title, description, dueDate });
    setLoading(false);
    navigate("/tasks");
  };

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>Add new task</p>
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
            value={title}
            className={classes.input}
            onChange={onChangeTitleHandler}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.description_wrapper}>
          <p className={classes.tag}>Description </p>
          <textarea
            type="text"
            value={description}
            className={classes.textarea}
            onChange={onChangeDescriptionHandler}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.duedate_wrapper}>
          <p className={classes.tag}>Due Date </p>
          <input
            type="text"
            value={dueDate}
            className={classes.input}
            onChange={onChangeDueDateHandler}
            onClick={() => setError(null)}
          />
        </div>
      </div>
      <div className={classes.action}>
        <Button className={classes.btn} onClick={onAddHandler}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
