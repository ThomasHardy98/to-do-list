import { FormEvent, useContext, useRef, useState } from "react";
import { v4 } from "uuid";

import TasksContext from "context/TasksContext";

import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  const ctx = useContext(TasksContext);
  const [input, setInput] = useState("");
  const taskRef = useRef<HTMLInputElement>(null);

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskRef.current) {
      ctx.addTask({
        id: v4(),
        title: taskRef.current.value,
        completed: false,
        isEditing: false,
      });
      setInput("");
    }
  };

  const onInput = () => {
    if (taskRef.current) {
      setInput(taskRef.current.value);
    }
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
