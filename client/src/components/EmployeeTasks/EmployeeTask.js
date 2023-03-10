import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Utils/Button.js";
import classes from "./EmployeeTask.module.css";
import Task from "./Task.js";

const DUMMY_EMP = {
  fullName: "John Doe",
  email: "john@doe.com",
  phoneNumber: "089999999",
  birth: "25/12/1990",
  salary: "2400",
  tasks: [
    {
      title: "Merging",
      description: "Check and merge the new code",
      dueDate: "05/10/2023",
      status: "In Progress",
      _id: "asdf125",
    },
    {
      title: "Fixing bug",
      description:
        "There is a bug reported on user trying to log in with Safari Browser",
      dueDate: "03/10/2023",
      status: "In Progress",
      _id: "asdf123",
    },
    {
      title: "Fixing bug",
      description:
        "There is a bug reported on user trying to log in with Safari Browser",
      dueDate: "03/10/2023",
      status: "Completed",
      _id: "asdf123",
    },
  ],
  _id: "asd123",
};

const EmployeeTask = () => {
  const [tasks, setTasks] = useState(DUMMY_EMP.tasks);
  const [user, setUser] = useState(DUMMY_EMP);
  const { userId } = useParams();
  //Fetch with UserId
  console.log(tasks);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.headline}>
          <p>
            {user.fullName} is working on {tasks.length} tasks
          </p>
        </div>
        <ul className={classes.list_container}>
          {tasks.map((x) => (
            <Task task={x} />
          ))}
        </ul>
      </div>
      <Button>Assign Task</Button>
    </div>
  );
};

export default EmployeeTask;
