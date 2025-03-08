import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task, Tasks } from '../../types/task';

const initialState: Tasks = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, completeTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
