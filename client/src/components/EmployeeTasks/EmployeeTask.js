import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeServices.js";
import Button from "../Utils/Button.js";
import TasksModal from "../Utils/TasksModal.js";
import classes from "./EmployeeTask.module.css";
import Task from "./Task.js";

const EmployeeTask = () => {
  const [tasks, setTasks] = useState([]);
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [updated, setUpdated] = useState(false);
  const { employeeId } = useParams();
  const [activeTasks, setActiveTasks] = useState(0);

  useEffect(() => {
    (async function getEmployeeData() {
      setLoading(true);
      const employeeData = await getEmployeeById(employeeId);
      setEmployee(employeeData);
      setTasks(employeeData.tasks);
      setLoading(false);
      setActiveTasks(
        employeeData.tasks.filter((task) => task.status !== "Completed").length
      );
    })();
  }, [updated]);
  const onAssignHandler = () => {
    setModalVisible(true);
  };
  return (
    <>
      {modalVisible && (
        <TasksModal
          setModalVisible={setModalVisible}
          employeeId={employee._id}
          setUpdated={setUpdated}
        />
      )}
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.headline}>
            <p>
              {employee.fullName} is working on {activeTasks} tasks
            </p>
          </div>
          {tasks.length > 0 && (
            <ul className={classes.list_container}>
              {tasks.reverse().map((x) => (
                <Task task={x} key={x._id} setUpdated={setUpdated} employeeId={employeeId}/>
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
