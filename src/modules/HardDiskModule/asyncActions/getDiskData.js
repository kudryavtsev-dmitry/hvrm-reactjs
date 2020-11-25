import { ToastError, ToastInfo } from 'components/Toasts'
import api from 'utils/services/api'
import {
  GetDiskSuccess,
  DiskLoading,
  DiskLoadingStopped,
} from '../HardDisk.slice'

const getDiskData = (name) => async (dispatch) => {
  try {
    dispatch(DiskLoading())

    const { status, data } = await api.post(
      'vm/hard-disk',
      {
        name: name,
      },
    )

    if (status === 200) {
      dispatch(GetDiskSuccess(data))
      ToastInfo(`Disk data was loaded`)
    }
  } catch (e) {
    ToastError('Unknown error')
    dispatch(DiskLoadingStopped())
  }
}

export default getDiskData
