import { createSlice } from '@reduxjs/toolkit'

const HardDiskSlice = createSlice({
  name: 'Disk',
  initialState: {
    vmTotal: null,
    vmUsed: null,
    loading: false,
  },

  reducers: {
    GetDiskSuccess(state, action) {
      state.vmTotal = action.payload.size
      state.vmUsed = action.payload.fileSize
      state.loading = false
    },
    DiskLoading(state) {
      state.loading = true
    },
    // ServerMemoryLoadSuccess(state, action) {
    //   state.free = action.payload.free
    //   state.total = action.payload.total
    //   state.loading = false
    // },
  },
})

export default HardDiskSlice.reducer

export const {
  GetDiskSuccess,
  DiskLoading,
} = HardDiskSlice.actions
