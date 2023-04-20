import Task from "./Task";

import styles from "./TaskList.module.scss";

type ITasks = {
  tasks: Array<ITask>;
};

const TaskList = ({ tasks }: ITasks) => {
  return (
    <ul className={styles.list}>
      {tasks.map((task, i) => {
        return (
          <li key={i} className={styles.listItem}>
            <Task
              id={task.id}
              title={task.title}
              completed={false}
              isEditing={false}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
