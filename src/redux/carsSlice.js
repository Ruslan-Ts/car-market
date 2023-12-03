import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',

  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    pageLimit: 12,
  },
  reducers: {
    nextPage: state => {
      state.pageLimit += 12;
    },
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    delFromFavorites: (state, { payload }) => {
      state.favorites.filter(car => car.id !== payload.id);
    },
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
export const { nextPage, addToFavorites, delFromFavorites } = carsSlice.actions;
