import { useEffect, useState } from "react";
import { getTasks } from "../../services/taskService.js";
import ButtonLink from "../Utils/ButtonLink.js";
import Spinner from "../Utils/Spinner.js";
import TaskDetailsModal from "../Utils/TaskDetailsModal.js";
import TaskList from "./TaskList.js";
import classes from "./Tasks.module.css";

const DUMMY_TASKS = [
  {
    title: "Fixing bug",
    description:
      "There is a bug reported on user trying to log in with Safari Browser",
    assignee: [
      {
        fullName: "Mark Doe",
        email: "mark@doe.com",
        phoneNumber: "087777777",
        birth: "23/12/1993",
        salary: "3100",
        tasks: "4",
        _id: "asd127",
      },
    ],
    dueDate: "03/10/2023",
    status: "In Progress",
    _id: "asdf123",
  },
  {
    title: "Fixing UI",
    description: "There is a UI malfunction with sending messages",
    assignee: [
      {
        fullName: "Mark Doe",
        email: "mark@doe.com",
        phoneNumber: "087777777",
        birth: "23/12/1993",
        salary: "3100",
        tasks: "4",
        _id: "asd127",
      },
    ],
    dueDate: "22/10/2023",
    status: "Completed",
    _id: "asdf124",
  },
  {
    title: "Merging",
    description: "Check and merge the new code",
    assignee: [],
    dueDate: "05/10/2023",
    status: "Not Started",
    _id: "asdf125",
  },
];

const Tasks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  //for Modal
  const [taskId, setTaskId] = useState();
  //
  const [tasks, setTasks] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    (async function fetchTasks() {
      setTasks(await getTasks());
      setHasLoaded(true);
    })();
  }, [updated]);
  return (
    <>
      {modalVisible && (
        <TaskDetailsModal setModalVisible={setModalVisible} taskId={taskId} />
      )}
      <div className={classes.container}>
        <div className={classes.headline}>
          <p>All Tasks</p>
        </div>
        <div className={classes.content}>
          {hasLoaded && (
            <ul className={classes.ul}>
              {tasks.length > 0 &&
                tasks
                  .reverse()
                  .map((x) => (
                    <TaskList
                      key={x._id}
                      task={x}
                      setModalVisible={setModalVisible}
                      setTaskId={setTaskId}
                      setUpdated={setUpdated}
                    />
                  ))}
              {tasks.length === 0 && (
                <div className={classes.default}>
                  <p>There aren't any tasks yet.</p>
                </div>
              )}
            </ul>
          )}
          {!hasLoaded && (
            <div className={classes.spinner}>
              <Spinner h={350} w={350} />
            </div>
          )}
        </div>
        <ButtonLink to={"/tasks/add"} className={classes.btn}>
          Add Task
        </ButtonLink>
      </div>
    </>
  );
};

export default Tasks;
