type ITask = {
  title: string;
};

const Task = ({ title }: ITask) => {
  return (
    <div>
      <input type="checkbox" />
      <p>{title}</p>
    </div>
  );
};

export default Task;
