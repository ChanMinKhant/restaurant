import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true', // Persist state
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode.toString());
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
