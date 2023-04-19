import { ReactNode, useState } from "react";

import TasksContext from "context/TasksContext";

type ITasksProvider = {
  children: ReactNode;
};

const TasksProvider = ({ children }: ITasksProvider) => {
  const [tasks, setTasks] = useState(Array<ITask>);

  const addTask = (task: ITask) => {
    setTasks((prev) => [task, ...prev]);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const changeStatus = (id: string, completed: boolean) => {
    const selectedTaskIndex = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex].completed = completed;
    setTasks(updatedTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, changeStatus }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
