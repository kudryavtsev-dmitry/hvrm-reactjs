import { ToastError, ToastInfo } from 'components/Toasts'
import api from 'utils/services/api'
import {
  DiskLoading,
  DiskLoadingStopped,
} from '../HardDisk.slice'
import getDiskData from './getDiskData'

const resizeDisk = (name, size, path) => async (
  dispatch,
) => {
  try {
    dispatch(DiskLoading())

    const { status } = await api.post(
      'vm/hard-disk/resize',
      {
        path,
        size,
      },
    )

    if (status === 200) {
      dispatch(getDiskData(name))
      ToastInfo(`Disk size was changed`)
    }
  } catch (e) {
    ToastError('Incorrenct size')
    dispatch(DiskLoadingStopped())
  }
}

export default resizeDisk
