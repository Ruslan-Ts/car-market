const { createSlice } = require('@reduxjs/toolkit');

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    model: '',
    rentalPrice: null,
    mileageFrom: null,
    mileageTo: null,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
