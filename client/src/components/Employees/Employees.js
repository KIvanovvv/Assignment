import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeServices.js";

import ButtonLink from "../Utils/ButtonLink.js";
import EmployeeList from "./EmployeeList.js";
import classes from "./Employees.module.css";

const DUMMY_EMPLOYEES = [
  {
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
        status: "Not Started",
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
  },
  {
    fullName: "Jane Doe",
    email: "jane@doe.com",
    phoneNumber: "088888888",
    birth: "24/12/1992",
    salary: "2600",
    tasks: [],
    _id: "asd124",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: [],
    _id: "asd125",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: [],
    _id: "asd126",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: [],
    _id: "asd127",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: [],
    _id: "asd128",
  },
];

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
          <div>
            <p>Loading ...</p>
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
