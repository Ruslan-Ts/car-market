import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',

  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    page: 1,
    pageLimit: 12,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addMatcher(isAnyOf(fetchCars.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchCars.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
