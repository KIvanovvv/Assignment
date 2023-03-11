import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getEmployeeById,
  updateEmployee,
} from "../../services/employeeServices.js";
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
        "There is a bug reported on employee trying to log in with Safari Browser",
      dueDate: "03/10/2023",
      status: "In Progress",
      _id: "asdf123",
    },
  ],
  _id: "asd123",
};

const Edit = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const emailPattern = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const yearPattern =
    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/gm;

  useEffect(() => {
    (async function getEmployeeData() {
      setEmployee(await getEmployeeById(employeeId));
      setHasLoaded(true);
    })();
  }, []);
  const onSaveHandler = async () => {
    if (!employee.fullName.trim()) {
      setError(`Name is required`);
      return;
    }
    if (!employee.email.match(emailPattern)) {
      setError(`Enter valid email`);
      return;
    }
    if (!employee.phoneNumber.trim()) {
      setError(`Phone number is required`);
      return;
    }
    if (!employee.birth.match(yearPattern)) {
      setError(`Enter a valid date in format dd/mm/yyyy`);
      return;
    }
    if (!employee.salary.trim()) {
      setError(`Salary is required`);
      return;
    }
    setUpdating(true);
    await updateEmployee(employee);
    setUpdating(false);
    navigate("/employees");
  };
  return (
    <div className={classes.container}>
      {hasLoaded && (
        <>
          {" "}
          <div className={classes.headline}>
            <p>Edit employee data</p>
          </div>
          {error && (
            <div className={classes.error}>
              <p>{error}</p>
            </div>
          )}
          <div className={classes.content}>
            <div className={classes.name_wrapper}>
              <p className={classes.tag}>Name </p>
              <input
                type="text"
                defaultValue={employee.fullName}
                className={classes.input}
                onChange={(e) =>
                  setEmployee({ ...employee, fullName: e.target.value })
                }
                onClick={() => setError(null)}
              />
            </div>
            <div className={classes.email_wrapper}>
              <p className={classes.tag}>Email </p>
              <input
                type="text"
                defaultValue={employee.email}
                className={classes.input}
                onChange={(e) =>
                  setEmployee({ ...employee, email: e.target.value })
                }
                onClick={() => setError(null)}
              />
            </div>
            <div className={classes.phone_wrapper}>
              <p className={classes.tag}>Phone number </p>
              <input
                type="text"
                defaultValue={employee.phoneNumber}
                className={classes.input}
                onChange={(e) =>
                  setEmployee({ ...employee, phoneNumber: e.target.value })
                }
                onClick={() => setError(null)}
              />
            </div>
            <div className={classes.birth_wrapper}>
              <p className={classes.tag}>Date of birth </p>
              <input
                type="text"
                defaultValue={employee.birth}
                className={classes.input}
                onChange={(e) =>
                  setEmployee({ ...employee, birth: e.target.value })
                }
                onClick={() => setError(null)}
              />
            </div>
            <div className={classes.salary_wrapper}>
              <p className={classes.tag}>Salary </p>
              <input
                type="text"
                defaultValue={employee.salary}
                className={classes.input}
                onChange={(e) =>
                  setEmployee({ ...employee, salary: e.target.value })
                }
                onClick={() => setError(null)}
              />
            </div>
          </div>
          <div className={classes.action}>
            <Button className={classes.btn_save} onClick={onSaveHandler}>
              Save
            </Button>
            <Button className={classes.btn_remove}>Remove</Button>
          </div>
        </>
      )}
      {!hasLoaded && (
        <div>
          <p>Loading....</p>
        </div>
      )}
    </div>
  );
};

export default Edit;
