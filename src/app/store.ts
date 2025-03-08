import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/tasks/task-slice';
import themeReducer from './features/tasks/theme-slice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
