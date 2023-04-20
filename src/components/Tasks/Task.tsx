import { ChangeEvent, MouseEvent, useContext, useRef } from "react";

import TasksContext from "context/TasksContext";

import styles from "./Task.module.scss";

const Task = ({ id, title }: ITask) => {
  const ctx = useContext(TasksContext);
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
    ctx.isEditing(id, true);
  };

  const handleUpdateClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      ctx.updateText(id, inputRef.current.value);
    }
    ctx.isEditing(id, false);
  };

  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" onChange={handleChange} />
      {!ctx.getIsEditing(id) ? (
        <p>{title}</p>
      ) : (
        <input
          className={styles.editingInput}
          key={title}
          defaultValue={title}
          ref={inputRef}
        />
      )}
      <div className={styles.actionButtons}>
        {!ctx.getIsEditing(id) ? (
          <button onClick={handleEditClick}>Edit</button>
        ) : (
          <button onClick={handleUpdateClick}>Update</button>
        )}
        {!ctx.getIsEditing(id) && (
          <button onClick={handleDeleteClick}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default Task;
