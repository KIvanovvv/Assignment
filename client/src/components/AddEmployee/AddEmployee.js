import { useState } from "react";
import Button from "../Utils/Button.js";
import classes from "./AddEmployee.module.css";

const AddEmployee = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [salary, setSalary] = useState("");
  //TODO validation, POST, redirect to Employees
  const onChangeNameHandler = () => {};
  const onChangeEmailHandler = () => {};
  const onChangePhoneHandler = () => {};
  const onChangeBirthHandler = () => {};
  const onChangeSalaryHandler = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.name_wrapper}>
          <p className={classes.tag}>Name </p>
          <input
            type="text"
            value={fullName}
            className={classes.input}
            onChange={onChangeNameHandler}
          />
        </div>
        <div className={classes.email_wrapper}>
          <p className={classes.tag}>Email </p>
          <input
            type="text"
            value={email}
            className={classes.input}
            onChange={onChangeEmailHandler}
          />
        </div>
        <div className={classes.phone_wrapper}>
          <p className={classes.tag}>Phone number </p>
          <input
            type="text"
            value={phoneNumber}
            className={classes.input}
            onChange={onChangePhoneHandler}
          />
        </div>
        <div className={classes.birth_wrapper}>
          <p className={classes.tag}>Date of birth </p>
          <input
            type="text"
            value={birth}
            className={classes.input}
            onChange={onChangeBirthHandler}
          />
        </div>
        <div className={classes.salary_wrapper}>
          <p className={classes.tag}>Salary </p>
          <input
            type="text"
            value={salary}
            className={classes.input}
            onChange={onChangeSalaryHandler}
          />
        </div>
      </div>
      <div className={classes.action}>
        <Button className={classes.btn}>Add</Button>
      </div>
    </div>
  );
};

export default AddEmployee;
