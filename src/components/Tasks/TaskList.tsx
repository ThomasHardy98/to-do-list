import Task from "./Task";

type ITasks = {
  tasks: Array<string>;
};

const TaskList = ({ tasks }: ITasks) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <li key={i}>
            <Task title={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
