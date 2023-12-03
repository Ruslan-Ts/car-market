import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6569c0ecde53105b0dd798cb.mockapi.io/api/catalog/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (pageLimit, thunkAPI) => {
    try {
      const { data } = await axios.get(`/car?page=1&limit=${pageLimit}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
