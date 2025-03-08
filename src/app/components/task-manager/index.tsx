import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { addTask } from '../../features/tasks/task-slice';
import { useTheme } from '../../theme/theme-context';
import { tokens } from '../../theme/theme';

import Button from '../Button';
import InputField from '../InputField';
import TaskList from './tasks';

const TaskManager = () => {
  const { themeSettings, mode } = useTheme();
  const theme = themeSettings;
  const colors = tokens(mode);

  const [taskText, setTaskText] = useState('');
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const maxChars = 100;

  const handleAddTask = (text: string) => {
    if (taskText.trim()) {
      dispatch(addTask(text));
      setTaskText('');
    }
  };

  return (
    <div className='card'>
      <div className='task-manager-container'>
        <div className='task-manager'>
          <InputField
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder='Enter a task'
            style={{ backgroundColor: colors.grey[100], color: theme.palette.neutral.dark }}
          />
          <Button
            disabled={taskText.length >= maxChars || taskText === ''}
            onClick={() => handleAddTask(taskText)}
            style={{ backgroundColor: colors.greenAccent[500], color: theme.palette.neutral.dark }}
            label='Add Task'
          />
        </div>
        {taskText.length > maxChars && (
          <p style={{ color: colors.redAccent[700], fontSize: '14px', marginBottom: '.5rem' }}>
            Character count exceeds the limit of {maxChars}
          </p>
        )}
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskManager;
