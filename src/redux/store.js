import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
});
