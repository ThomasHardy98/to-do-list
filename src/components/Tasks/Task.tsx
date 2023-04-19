import { ChangeEvent, MouseEvent, useContext } from "react";

import TasksContext from "context/TasksContext";

const Task = ({ id, title, completed }: ITask) => {
  const ctx = useContext(TasksContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    ctx.changeStatus(id, e.target.checked);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ctx.deleteTask(id);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <p>{id}</p>
      <p>{title}</p>
      <p>{completed.toString()}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Task;
