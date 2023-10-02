import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
