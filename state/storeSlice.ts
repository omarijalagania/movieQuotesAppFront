import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './types';

const initialState: GlobalState = {
  registerResponse: {},
  confirmResponse: {},
  passwordRecoveryResponse: {},
  token: '',
};

export const storeSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    saveRegisterResponse: (state, action) => {
      state.registerResponse = action.payload;
    },
    saveConfirmResponse: (state, action) => {
      state.confirmResponse = action.payload;
    },
    savePasswordRecoveryResponse: (state, action) => {
      state.passwordRecoveryResponse = action.payload;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {
  saveRegisterResponse,
  saveConfirmResponse,
  savePasswordRecoveryResponse,
  saveToken,
} = storeSlice.actions;

export default storeSlice.reducer;
