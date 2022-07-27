import { configureStore } from '@reduxjs/toolkit';
import { storeSlice } from 'state/storeSlice';

export const store = configureStore({
  reducer: {
    quotes: storeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
