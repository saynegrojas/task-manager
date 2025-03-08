import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Mode } from '../../types/task';

const initialState: Mode = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
