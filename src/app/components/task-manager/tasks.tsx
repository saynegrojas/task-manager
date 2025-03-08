import { Task } from '../../types/task';

import TaskItem from './task';

interface TaskListProps {
  tasks: Task[];
}
const TaskList = ({ tasks }: TaskListProps) => {
  return tasks.length > 0 ? (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  ) : (
    <p className='no-tasks'>No Task</p>
  );
};

export default TaskList;
