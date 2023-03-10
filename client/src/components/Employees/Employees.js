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
