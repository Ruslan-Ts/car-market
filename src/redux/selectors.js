import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleCars = createSelector(
  [selectCars, selectStatusFilter],
  (cars, filter) => {
    return cars.filter(car => car.includes(filter));
  }
);
