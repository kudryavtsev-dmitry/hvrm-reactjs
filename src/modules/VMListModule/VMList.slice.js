import { createSlice } from '@reduxjs/toolkit'

const VMListSlice = createSlice({
  name: 'VMList',
  initialState: {
    virtualMachines: [],
    error: null,
    loading: false,
    updatingVM: null,
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
    updatingVM(state, action) {
      state.updatingVM = action.payload
    },
    VMUpdateSuccess(state, action) {
      state.virtualMachines.splice(
        action.payload.index,
        1,
        action.payload.data,
      )
      state.updatingVM = null
    },
  },
})

export default VMListSlice.reducer

export const {
  VMLoadSuccess,
  VMLoadError,
  VMLoading,
  VMUpdateSuccess,
  updatingVM,
} = VMListSlice.actions
