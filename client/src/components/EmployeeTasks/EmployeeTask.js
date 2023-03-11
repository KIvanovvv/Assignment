import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeServices.js";
import Button from "../Utils/Button.js";
import TasksModal from "../Utils/TasksModal.js";
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
  const [tasks, setTasks] = useState([]);
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { employeeId } = useParams();
  //Fetch with UserId
  console.log(tasks);

  useEffect(() => {
    (async function getEmployeeData() {
      setLoading(true);
      const employeeData = await getEmployeeById(employeeId);
      setEmployee(employeeData);
      setTasks(employeeData.tasks);
      setLoading(false);
    })();
  }, []);
  const onAssignHandler = () => {
    setModalVisible(true);
  };
  return (
    <>
      {modalVisible && <TasksModal setModalVisible={setModalVisible} />}
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.headline}>
            <p>
              {employee.fullName} is working on {tasks.length} tasks
            </p>
          </div>
          {tasks.length > 0 && (
            <ul className={classes.list_container}>
              {tasks.map((x) => (
                <Task task={x} />
              ))}
            </ul>
          )}
          {tasks.length === 0 && (
            <div className={classes.no_tasks}>
              <p>
                {employee.fullName} is not working on any task at the moment.
              </p>
            </div>
          )}
        </div>
        <Button onClick={onAssignHandler}>Assign Task</Button>
      </div>
    </>
  );
};

export default EmployeeTask;
