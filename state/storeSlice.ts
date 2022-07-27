import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './types';

const initialState: GlobalState = {
  token: '',
};

export const storeSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { saveToken } = storeSlice.actions;

export default storeSlice.reducer;
