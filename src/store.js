import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import authSlice from 'modules/AuthModule/auth.slice'
import VMListSlice from 'modules/VMListModule/VMList.slice'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer: {
    auth: authSlice,
    virtualMachines: VMListSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
