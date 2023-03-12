import classes from "./List.module.css";

const List = ({ employee }) => {
  return (
    <li className={classes.list}>
      <div className={classes.name_container}>
        <p className={classes.head_name}>Name</p>
        <p className={classes.name}>{employee.fullName}</p>
      </div>
      <div className={classes.contacts}>
        <p>
          <span className={classes.tag}>Email: </span>
          {employee.email}
        </p>
        <p>
          <span className={classes.tag}>Phone: </span>
          {employee.phoneNumber}
        </p>
      </div>
      <div className={classes.salary}>
        <p className={classes.tag}>Salary</p>
        <p>{employee.salary}$</p>
      </div>
      <div className={classes.achievement}>
        <p className={classes.tag}>Completed tasks this month</p>
        <p className={classes.tasks}>{employee.finishedTasks}</p>
      </div>
    </li>
  );
};

export default List;
