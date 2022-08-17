import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './types';

const initialState: GlobalState = {
  registerResponse: {},
  confirmResponse: {},
  passwordRecoveryResponse: {},
  newPasswordResponse: {},
  tokens: '',
  userId: '',
  singleMovie: {},
  addMovie: {},
  triggerDelete: false,
  postItem: {},
  socket: null,
  updateComment: {},
  notifications: {},
  likeNotification: {},
  closeModal: false,
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
      state.tokens = action.payload;
    },
    saveNewPasswordResponse: (state, action) => {
      state.newPasswordResponse = action.payload;
    },
    saveUserId: (state, action) => {
      state.userId = action.payload;
    },
    saveSingleMovie: (state, action) => {
      state.singleMovie = action.payload;
    },
    saveAddMovie: (state, action) => {
      state.addMovie = action.payload;
    },
    isTriggerDelete: (state, action) => {
      state.triggerDelete = action.payload;
    },
    savePostItem: (state, action) => {
      state.postItem = action.payload;
    },
    saveSocket: (state, action) => {
      state.socket = action.payload;
    },
    saveComment: (state, action) => {
      state.updateComment = action.payload;
    },
    saveNotification: (state, action) => {
      state.notifications = action.payload;
    },
    onModalClose: (state, action) => {
      state.closeModal = action.payload;
    },
    saveLikeNotification: (state, action) => {
      state.likeNotification = action.payload;
    },
  },
});

export const {
  saveRegisterResponse,
  saveConfirmResponse,
  savePasswordRecoveryResponse,
  saveToken,
  saveNewPasswordResponse,
  saveUserId,
  saveSingleMovie,
  saveAddMovie,
  isTriggerDelete,
  savePostItem,
  saveSocket,
  saveComment,
  saveNotification,
  onModalClose,
  saveLikeNotification,
} = storeSlice.actions;

export default storeSlice.reducer;
