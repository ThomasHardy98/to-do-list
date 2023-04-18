import { createContext } from "react";

type ITasksContext = {
  tasks: Array<string>;
  addTask: (task: string) => void;
};

const defaultState = {
  tasks: [],
  addTask: () => {},
};

const TasksContext = createContext<ITasksContext>(defaultState);

export default TasksContext;
