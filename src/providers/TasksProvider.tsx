import { ReactNode, useEffect, useState } from "react";

import TasksContext from "context/TasksContext";

type ITasksProvider = {
  children: ReactNode;
};

const TasksProvider = ({ children }: ITasksProvider) => {
  const [tasks, setTasks] = useState(Array<ITask>);

  useEffect(() => {
    const localTasks = localStorage.getItem("thardy_tasks");
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  const addTask = (task: ITask) => {
    setTasks((prev) => [task, ...prev]);
    const currentTasks = localStorage.getItem("thardy_tasks");
    if (currentTasks) {
      const parsed = JSON.parse(currentTasks);
      parsed.unshift(task);
      localStorage.setItem("thardy_tasks", JSON.stringify(parsed));
    }
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("thardy_tasks", JSON.stringify(newTasks));
  };

  const changeStatus = (id: string, completed: boolean) => {
    const selectedTaskIndex = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex].completed = completed;
    setTasks(updatedTasks);
    localStorage.setItem("thardy_tasks", JSON.stringify(updatedTasks));
  };

  const updateText = (id: string, title: string) => {
    const selectedTaskIndex = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex].title = title;
    setTasks(updatedTasks);
    localStorage.setItem("thardy_tasks", JSON.stringify(updatedTasks));
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask, changeStatus, updateText }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
