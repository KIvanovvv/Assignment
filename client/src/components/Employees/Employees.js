import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeServices.js";
import Spinner from "../Utils/Spinner.js";
import ButtonLink from "../Utils/ButtonLink.js";
import EmployeeList from "./EmployeeList.js";
import classes from "./Employees.module.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    (async function fetchEmployees() {
      setEmployees(await getEmployees());
      setHasLoaded(true);
    })();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>All Employees</p>
      </div>
      <div className={classes.content}>
        {hasLoaded && (
          <ul className={classes.ul}>
            {employees.reverse().map((x) => (
              <EmployeeList key={x._id} employee={x} />
            ))}
          </ul>
        )}
        {!hasLoaded && (
          <div className={classes.spinner}>
            <Spinner h={350} w={350} />
          </div>
        )}
      </div>
      <ButtonLink to={"/employees/add"} className={classes.btn_add}>
        Add Employee
      </ButtonLink>
    </div>
  );
};

export default Employees;
