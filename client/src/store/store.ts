import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import tableReducer from './features/tableSlice';
import darkModeReducer from './features/darkModeSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    table: tableReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
