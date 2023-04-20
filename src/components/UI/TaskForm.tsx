import { FormEvent, useContext, useRef, useState } from "react";

import TasksContext from "context/TasksContext";
import newid from "utils/newid";

import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  const ctx = useContext(TasksContext);
  const [input, setInput] = useState("");
  const taskRef = useRef<HTMLInputElement>(null);

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskRef.current) {
      ctx.addTask({
        id: newid(),
        title: taskRef.current.value,
        completed: false,
      });
      setInput("");
    }
  };

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <form className={styles.form} onSubmit={addTask}>
      <input
        className={styles.input}
        type="text"
        name="task"
        value={input}
        onChange={onInput}
        placeholder="Task name"
        ref={taskRef}
      />
      <button>Add task</button>
    </form>
  );
};

export default TaskForm;
