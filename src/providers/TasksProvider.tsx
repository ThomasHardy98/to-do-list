import { ReactNode, useState } from "react";

import TasksContext from "context/TasksContext";

type ITasksProvider = {
  children: ReactNode;
};

const TasksProvider = ({ children }: ITasksProvider) => {
  const [tasks, setTasks] = useState(Array<string>);

  const addTask = (task: string) => {
    setTasks((prev) => [task, ...prev]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
