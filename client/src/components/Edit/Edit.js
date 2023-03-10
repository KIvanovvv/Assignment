import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Button from "../Utils/Button.js";
import classes from "./Edit.module.css";

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
  ],
  _id: "asd123",
};

const Edit = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(DUMMY_EMP);
  console.log(user);
  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>Edit employee data</p>
      </div>
      <div className={classes.content}>
        <div className={classes.name_wrapper}>
          <p className={classes.tag}>Name </p>
          <input
            type="text"
            defaultValue={user.fullName}
            className={classes.input}
          />
        </div>
        <div className={classes.email_wrapper}>
          <p className={classes.tag}>Email </p>
          <input
            type="text"
            defaultValue={user.email}
            className={classes.input}
          />
        </div>
        <div className={classes.phone_wrapper}>
          <p className={classes.tag}>Phone number </p>
          <input
            type="text"
            defaultValue={user.phoneNumber}
            className={classes.input}
          />
        </div>
        <div className={classes.birth_wrapper}>
          <p className={classes.tag}>Date of birth </p>
          <input
            type="text"
            defaultValue={user.birth}
            className={classes.input}
          />
        </div>
        <div className={classes.salary_wrapper}>
          <p className={classes.tag}>Salary </p>
          <input
            type="text"
            defaultValue={user.salary}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.action}>
        <Button className={classes.btn_save}>Save</Button>
        <Button className={classes.btn_remove}>Remove</Button>
      </div>
    </div>
  );
};

export default Edit;
