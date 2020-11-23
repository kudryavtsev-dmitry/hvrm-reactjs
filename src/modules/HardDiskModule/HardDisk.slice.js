import { createSlice } from '@reduxjs/toolkit'

const HardDiskSlice = createSlice({
  name: 'Disk',
  initialState: {
    vmTotal: null,
    vmUsed: null,
    loading: false,
    path: '',
  },

  reducers: {
    GetDiskSuccess(state, action) {
      state.vmTotal = action.payload.size
      state.vmUsed = action.payload.fileSize
      state.path = action.payload.Path
      state.loading = false
    },
    ResizeDiskSuccess(state) {
      state.loading = false
    },
    DiskLoading(state) {
      state.loading = true
    },
  },
})

export default HardDiskSlice.reducer

export const {
  GetDiskSuccess,
  DiskLoading,
  ResizeDiskSuccess,
} = HardDiskSlice.actions
