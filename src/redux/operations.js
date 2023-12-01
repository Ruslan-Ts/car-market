import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6569c0ecde53105b0dd798cb.mockapi.io/api/catalog/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/car?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
