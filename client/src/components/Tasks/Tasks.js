import { useState } from "react";
import ButtonLink from "../Utils/ButtonLink.js";
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
  const [taskId, setTaskId] = useState();

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
          <ul className={classes.ul}>
            {DUMMY_TASKS.map((x) => (
              <TaskList
                key={x._id}
                task={x}
                setModalVisible={setModalVisible}
                setTaskId={setTaskId}
              />
            ))}
          </ul>
        </div>
        <ButtonLink to={"/tasks/add"} className={classes.btn}>
          Add Task
        </ButtonLink>
      </div>
    </>
  );
};

export default Tasks;
