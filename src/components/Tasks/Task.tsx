import {
  ChangeEvent,
  Fragment,
  FormEvent,
  MouseEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

import TasksContext from "context/TasksContext";

import styles from "./Task.module.scss";

const Task = ({ id, title }: ITask) => {
  const ctx = useContext(TasksContext);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    ctx.changeStatus(id, e.target.checked);
  };

  const handleInput = () => {
    if (inputRef.current) {
      if (inputRef.current.value !== "") {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ctx.deleteTask(id);
  };

  const handleEditClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ctx.isEditing(id, true);
  };

  const handleUpdateClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error) {
      if (inputRef.current) {
        ctx.updateText(id, inputRef.current.value);
      }
      ctx.isEditing(id, false);
    }
  };

  return (
    <div className={styles.taskContainer}>
      <label className={styles.container}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={ctx.getStatus(id)}
          className={styles.checkbox}
        />
        <span className={styles.checkmark}></span>
      </label>
      {!ctx.getIsEditing(id) ? (
        <Fragment>
          <p className={`${ctx.getStatus(id) && styles.completed}`}>{title}</p>
          <div className={styles.actionButtons}>
            <button onClick={handleEditClick} className={styles.editButton}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={handleDeleteClick} className={styles.deleteButton}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <form
            onSubmit={handleUpdateClick}
            id="edit"
            className={styles.editingForm}
          >
            <input
              className={`${styles.editingInput} ${error && styles.error}`}
              key={title}
              defaultValue={title}
              ref={inputRef}
              onChange={handleInput}
              autoFocus
            />
          </form>
          <div className={styles.actionButtons}>
            <button type="submit" form="edit" className={styles.updateButton}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Task;
