import { createContext } from "react";

type ITasksContext = {
  tasks: Array<ITask>;
  addTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  changeStatus: (id: string, completed: boolean) => void;
};

const defaultState = {
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
};

const TasksContext = createContext<ITasksContext>(defaultState);

export default TasksContext;
