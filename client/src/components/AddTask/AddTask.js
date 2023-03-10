import { useState } from "react";
import Button from "../Utils/Button.js";
import classes from "./AddTask.module.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  //TODO validation, POST, redirect to Employees
  const onChangeTitleHandler = () => {};
  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDueDateHandler = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>Add new task</p>
      </div>
      <div className={classes.content}>
        <div className={classes.title_wrapper}>
          <p className={classes.tag}>Title </p>
          <input
            type="text"
            value={title}
            className={classes.input}
            onChange={onChangeTitleHandler}
          />
        </div>
        <div className={classes.description_wrapper}>
          <p className={classes.tag}>Description </p>
          <textarea
            type="text"
            value={description}
            className={classes.textarea}
            onChange={onChangeDescriptionHandler}
          />
        </div>
        <div className={classes.duedate_wrapper}>
          <p className={classes.tag}>Due Date </p>
          <input
            type="text"
            value={dueDate}
            className={classes.input}
            onChange={onChangeDueDateHandler}
          />
        </div>
      </div>
      <div className={classes.action}>
        <Button className={classes.btn}>Add</Button>
      </div>
    </div>
  );
};

export default AddTask;
