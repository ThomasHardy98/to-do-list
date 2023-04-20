import { ChangeEvent, MouseEvent, useContext, useRef, useState } from "react";

import TasksContext from "context/TasksContext";

const Task = ({ id, title }: ITask) => {
  const ctx = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    ctx.changeStatus(id, e.target.checked);
  };

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ctx.deleteTask(id);
  };

  const handleEditClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleUpdateClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      ctx.updateText(id, inputRef.current.value);
    }
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      {!isEditing ? (
        <p>{title}</p>
      ) : (
        <input defaultValue={title} ref={inputRef} />
      )}
      {!isEditing ? (
        <button onClick={handleEditClick}>Edit</button>
      ) : (
        <button onClick={handleUpdateClick}>Update</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Task;
