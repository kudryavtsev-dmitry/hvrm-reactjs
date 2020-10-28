import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user')).login,
    token: localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user')).jwt,
    isAuth: Boolean(localStorage.getItem('user')),
    errorStatus: null,
    loading: false,
  },

  reducers: {
    authSuccess(state, action) {
      state.login = action.payload.login
      state.token = action.payload.jwt
      state.loadig = false
      state.isAuth = true
    },
    authError(state, action) {
      state.loadig = false
      state.errorStatus = action.payload
    },
    authLoading(state) {
      state.loadig = true
    },
  },
})

export default authSlice.reducer

export const { authSuccess, authLoading, authError } = authSlice.actions


