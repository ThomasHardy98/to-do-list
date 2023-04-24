import { useContext } from "react";

import TaskList from "components/Tasks/TaskList";
import TaskForm from "components/UI/TaskForm";
import TasksContext from "context/TasksContext";

import styles from "App.module.scss";

const App = () => {
  const ctx = useContext(TasksContext);
  return (
    <div className={styles.container}>
      <div className={styles.title}>To-do List</div>
      <TaskForm />
      {ctx.tasks.length > 0 ? (
        <TaskList tasks={ctx.tasks} />
      ) : (
        <p>You have no tasks.</p>
      )}
    </div>
  );
};

export default App;
