import TasksContext from "context/TasksContext";
import { FormEvent, useContext, useState } from "react";

const TaskForm = () => {
  const ctx = useContext(TasksContext);
  const [input, setInput] = useState("");

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      task: HTMLInputElement;
    };
    ctx.addTask(formElements.task.value);
    setInput("");
  };

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <form onSubmit={addTask}>
      <label>Add a to-do</label>
      <input type="text" name="task" value={input} onChange={onInput} />
      <button>Add to-do</button>
    </form>
  );
};

export default TaskForm;
