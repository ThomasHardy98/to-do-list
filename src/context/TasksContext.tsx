import { createContext } from "react";

type ITasksContext = {
  tasks: Array<ITask>;
  addTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  changeStatus: (id: string, completed: boolean) => void;
  getStatus: (id: string) => boolean;
  updateText: (id: string, title: string) => void;
  isEditing: (id: string, isEditing: boolean) => void;
  getIsEditing: (id: string) => boolean;
};

const defaultState = {
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
  getStatus: () => false,
  updateText: () => {},
  isEditing: () => {},
  getIsEditing: () => false,
};

const TasksContext = createContext<ITasksContext>(defaultState);

export default TasksContext;
