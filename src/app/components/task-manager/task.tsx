import { completeTask, removeTask } from '../../features/tasks/task-slice';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../theme/theme-context';
import { Task } from '../../types/task';
import { tokens } from '../../theme/theme';

import Button from '../Button';

const getStyle = (isCompleted: boolean) => {
  return {
    textDecoration: isCompleted ? 'line-through' : 'none',
  };
};

interface TaskItemProps {
  task: Task;
}
const TaskItem = ({ task }: TaskItemProps) => {
  const { mode } = useTheme();
  const colors = tokens(mode);
  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  return (
    <div className='task-item'>
      <span
        className='task-item-container'
        style={getStyle(task.completed)}
        onClick={() => dispatch(completeTask(task.id))}
      >
        {task.text}
      </span>
      <Button
        onClick={() => handleRemoveTask(task.id)}
        style={{ backgroundColor: colors.redAccent[500], color: colors.primary[100] }}
        label='Delete'
      />
    </div>
  );
};

export default TaskItem;
