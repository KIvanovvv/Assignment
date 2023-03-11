import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../services/employeeServices.js";
import Button from "../Utils/Button.js";
import classes from "./AddEmployee.module.css";

const AddEmployee = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const yearPattern =
    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/gm;

  const onChangeNameHandler = (e) => {
    setFullName(e.target.value);
  };
  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhoneHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onChangeBirthHandler = (e) => {
    setBirth(e.target.value);
  };
  const onChangeSalaryHandler = (e) => {
    setSalary(e.target.value);
  };
  const onAddHandler = async () => {
    if (!fullName.trim()) {
      setError(`Name is required`);
      return;
    }
    if (!email.match(emailPattern)) {
      setError(`Enter valid email`);
      return;
    }
    if (!phoneNumber.trim()) {
      setError(`Phone number is required`);
      return;
    }
    if (!birth.match(yearPattern)) {
      setError(`Enter a valid date in format dd/mm/yyyy`);
      return;
    }
    if (!salary.trim()) {
      setError(`Salary is required`);
      return;
    }
    setLoading(true);
    await createEmployee({ fullName, email, phoneNumber, birth, salary });
    setLoading(false);
    navigate("/employees");
  };
  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>Add new employee</p>
      </div>
      {error && <div className={classes.error}>{error}</div>}
      <div className={classes.content}>
        <div className={classes.name_wrapper}>
          <p className={classes.tag}>Name </p>
          <input
            type="text"
            value={fullName}
            className={classes.input}
            onChange={onChangeNameHandler}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.email_wrapper}>
          <p className={classes.tag}>Email </p>
          <input
            type="text"
            value={email}
            className={classes.input}
            onChange={onChangeEmailHandler}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.phone_wrapper}>
          <p className={classes.tag}>Phone number </p>
          <input
            type="number"
            value={phoneNumber}
            className={classes.input}
            onChange={onChangePhoneHandler}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.birth_wrapper}>
          <p className={classes.tag}>Date of birth </p>
          <input
            type="text"
            value={birth}
            className={classes.input}
            onChange={onChangeBirthHandler}
            onClick={() => setError(null)}
          />
        </div>
        <div className={classes.salary_wrapper}>
          <p className={classes.tag}>Salary </p>
          <input
            type="number"
            value={salary}
            className={classes.input}
            onChange={onChangeSalaryHandler}
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

export default AddEmployee;
