import { createSlice } from '@reduxjs/toolkit'

const HardDiskSlice = createSlice({
  name: 'Disk',
  initialState: {
    vmTotal: null,
    vmUsed: null,
    converting: false,
    loading: false,
    format: '',
    type: '',
    path: '',
  },

  reducers: {
    GetDiskSuccess(state, action) {
      state.vmTotal = action.payload.size
      state.vmUsed = action.payload.fileSize
      state.path = action.payload.Path
      state.type = action.payload.VhdType
      state.format = action.payload.VhdFormat
      state.loading = false
      state.converting = false
    },
    DiskConverting(state) {
      state.converting = true
    },
    ResizeDiskSuccess(state) {
      state.loading = false
    },
    DiskLoading(state) {
      state.loading = true
    },
    DiskLoadingStopped(state) {
      state.loading = false
    },
  },
})

export default HardDiskSlice.reducer

export const {
  GetDiskSuccess,
  DiskLoading,
  ResizeDiskSuccess,
  DiskConverting,
  DiskLoadingStopped,
} = HardDiskSlice.actions
