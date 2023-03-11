import { useEffect, useState } from "react";
import { getTasks } from "../../services/taskService.js";
import TaskModalList from "./TaskModalList.js";
import classes from "./TasksModal.module.css";

const TasksModal = ({ setModalVisible, employeeId,setUpdated }) => {
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    (async function fetchTasks() {
      setTasks(await getTasks());
      setHasLoaded(true);
    })();
  }, []);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.backdrop}
        onClick={() => setModalVisible(false)}
      ></div>
      <div className={classes.container}>
        <div className={classes.headline}>
          <p>Available tasks</p>
        </div>
        <ul className={classes.list_ul}>
          {tasks.reverse().map((x) => (
            <TaskModalList
              task={x}
              key={x._id}
              employeeId={employeeId}
              setModalVisible={setModalVisible}
              setUpdated={setUpdated}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksModal;
