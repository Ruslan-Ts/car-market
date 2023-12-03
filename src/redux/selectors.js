import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectFavorites = state => state.cars.favorites;
export const selectPage = state => state.cars.page;
export const selectPageLimit = state => state.cars.pageLimit;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectStatusFilter = state => state.filters;

export const selectVisibleCars = createSelector(
  [selectCars, selectStatusFilter],
  (items, filters) => {
    return items.filter(({ model }) => model.includes(filters));
  }
);
