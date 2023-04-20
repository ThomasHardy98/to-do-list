import Task from "./Task";

type ITasks = {
  tasks: Array<ITask>;
};

const TaskList = ({ tasks }: ITasks) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <li key={i}>
            <Task id={task.id} title={task.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
