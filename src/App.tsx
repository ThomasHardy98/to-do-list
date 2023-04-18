import styles from "App.module.scss";
import { Fragment, useContext } from "react";

import TaskList from "components/Tasks/TaskList";
import TaskForm from "components/UI/TaskForm";
import TasksContext from "context/TasksContext";

const App = () => {
  const ctx = useContext(TasksContext);
  return (
    <Fragment>
      <div className={styles.h3}>To-do List</div>
      <TaskForm />
      <TaskList tasks={ctx.tasks} />
    </Fragment>
  );
};

export default App;
