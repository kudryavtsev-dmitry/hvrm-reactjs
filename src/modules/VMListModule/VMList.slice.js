import { createSlice } from '@reduxjs/toolkit'

const VMListSlice = createSlice({
  name: 'VMList',
  initialState: {
    virtualMachines: [],
    error: null,
    loading: false,
  },

  reducers: {
    VMLoadSuccess(state, action) {
      state.virtualMachines = action.payload
      state.loading = false
    },
    VMLoadError(state, action) {
      state.loading = false
      state.error = action.payload
    },
    VMLoading(state) {
      state.loading = true
    },
  },
})

export default VMListSlice.reducer

export const {
  VMLoadSuccess,
  VMLoadError,
  VMLoading,
} = VMListSlice.actions
