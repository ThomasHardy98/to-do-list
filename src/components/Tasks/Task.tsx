import { ChangeEvent, MouseEvent, useContext, useRef, useState } from "react";

import TasksContext from "context/TasksContext";

import styles from "./Task.module.scss";

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
    <div className={styles.taskContainer}>
      <input type="checkbox" onChange={handleChange} />
      {!isEditing ? (
        <p>{title}</p>
      ) : (
        <input
          className={styles.editingInput}
          defaultValue={title}
          ref={inputRef}
        />
      )}
      <div className={styles.actionButtons}>
        {!isEditing ? (
          <button onClick={handleEditClick}>Edit</button>
        ) : (
          <button onClick={handleUpdateClick}>Update</button>
        )}
        {!isEditing && <button onClick={handleDeleteClick}>Delete</button>}
      </div>
    </div>
  );
};

export default Task;
