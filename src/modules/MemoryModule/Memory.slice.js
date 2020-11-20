import { createSlice } from '@reduxjs/toolkit'

const MemorySlice = createSlice({
  name: 'Memory',
  initialState: {
    free: null,
    total: null,
    startup: null,
    buffer: null,
    priority: null,
    minimum: null,
    maximum: null,
    dynamic: null,
    loading: false,
  },

  reducers: {
    GetMemorySuccess(state, action) {
      state.startup = action.payload.startup
      state.buffer = action.payload.Buffer
      state.minimum = action.payload.minimum
      state.maximum = action.payload.maximum
      state.priority = action.payload.Priority
      state.dynamic = action.payload.DynamicMemoryEnabled
      state.loading = false
    },
    MemoryLoading(state) {
      state.loading = true
    },
    ServerMemoryLoadSuccess(state, action) {
      state.free = action.payload.free
      state.total = action.payload.total
      state.loading = false
    },
  },
})

export default MemorySlice.reducer

export const {
  GetMemorySuccess,
  ServerMemoryLoadSuccess,
  MemoryLoading,
} = MemorySlice.actions
