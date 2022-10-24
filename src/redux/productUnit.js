import { fetchAll } from '../api/productUnit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  productUnitList: [],
  error: '',
};

// First, create the thunk
export const fetchUnits = createAsyncThunk(
  'productUnit/fetchUnits',
  async () => {
    return fetchAll()
      .then((res) => res && res.response && res.response.data)
      .catch((e) => e);
  }
);

const productUnitListSlice = createSlice({
  name: 'productUnit',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUnits.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUnits.fulfilled, (state, action) => {
      state.loading = false;
      state.productUnitList = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUnits.rejected, (state, action) => {
      state.loading = false;
      state.productUnitList = [];
      state.error = action.error.message;
    });
  },
});

export default productUnitListSlice.reducer;
