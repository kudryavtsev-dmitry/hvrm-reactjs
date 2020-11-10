import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login:
      localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user')).login,
    token:
      localStorage.getItem('jwt') &&
      JSON.parse(localStorage.getItem('jwt')).jwt,
    isAuth: Boolean(localStorage.getItem('jwt')),
    firstName:
      localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user')).firstName,
    lastName:
      localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user')).lastName,
    email:
      localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user')).email,
    errorStatus: null,
    loading: false,
  },

  reducers: {
    authSuccess(state, action) {
      state.login = action.payload.login
      state.token = action.payload.jwt
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.loading = false
      state.isAuth = true
    },
    authError(state, action) {
      state.loading = false
      state.errorStatus = action.payload
    },
    authLoading(state) {
      state.loading = true
    },
  },
})

export default authSlice.reducer

export const {
  authSuccess,
  authLoading,
  authError,
} = authSlice.actions
