import Button from "../Utils/Button.js";
import EmployeeList from "./EmployeeList.js";
import classes from "./Employees.module.css";

const DUMMY_EMPLOYEES = [
  {
    fullName: "John Doe",
    email: "john@doe.com",
    phoneNumber: "089999999",
    birth: "25/12/1990",
    salary: "2400",
    tasks: "2",
    _id: "asd123",
  },
  {
    fullName: "Jane Doe",
    email: "jane@doe.com",
    phoneNumber: "088888888",
    birth: "24/12/1992",
    salary: "2600",
    tasks: "1",
    _id: "asd124",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: "3",
    _id: "asd125",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: "0",
    _id: "asd126",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: "4",
    _id: "asd127",
  },
  {
    fullName: "Mark Doe",
    email: "mark@doe.com",
    phoneNumber: "087777777",
    birth: "23/12/1993",
    salary: "3100",
    tasks: "2",
    _id: "asd128",
  },
];

const Employees = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ul className={classes.ul}>
          {DUMMY_EMPLOYEES.map((x) => (
            <EmployeeList key={x._id} employee={x} />
          ))}
        </ul>
      </div>
      <Button>Add Employee</Button>
    </div>
  );
};

export default Employees;
