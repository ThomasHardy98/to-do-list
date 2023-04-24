import { FormEvent, useContext, useRef, useState } from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import TasksContext from "context/TasksContext";

import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  const ctx = useContext(TasksContext);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      if (!error && inputRef.current.value !== "") {
        ctx.addTask({
          id: v4(),
          title: inputRef.current.value,
          completed: false,
          isEditing: false,
        });
        setInput("");
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const handleInput = () => {
    if (inputRef.current) {
      setInput(inputRef.current.value);
      if (inputRef.current.value !== "") {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <form
      className={`${styles.form} ${error && styles.error}`}
      onSubmit={addTask}
    >
      <input
        className={styles.input}
        type="text"
        name="task"
        value={input}
        onChange={handleInput}
        placeholder="Task name"
        ref={inputRef}
      />
      <button className={styles.addButton}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default TaskForm;
