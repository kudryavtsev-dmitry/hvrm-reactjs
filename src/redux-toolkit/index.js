import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authSlice from './auth/auth.slice'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {  auth: authSlice},
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});