import Task from "./Task";
import { useEffect, useState } from "react";

const TaskList = () => {
  let [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  let getTasks = async () => {
    let tasks = await fetch("http://localhost:5000/user");
    const json = await tasks.json();
    console.log(json);
    setTaskList(json);
  };

  return (
    <>
      {taskList.map((task) => (
        <Task key={task._id} taskData={task} />
      ))}
    </>
  );
};

export default TaskList;
