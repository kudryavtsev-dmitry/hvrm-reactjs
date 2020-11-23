import api from 'utils/services/api'
import {
  DiskLoading,
  ResizeDiskSuccess,
} from '../HardDisk.slice'
import getDiskData from './getDiskData'

const resizeDisk = (name, size, path) => async (
  dispatch,
) => {
  try {
    dispatch(DiskLoading())

    const { status, data } = await api.post(
      'vm/hard-disk/resize',
      {
        path,
        size,
      },
    )

    if (status === 200) {
      dispatch(getDiskData(name))
    }
  } catch (e) {
    console.log(e)
  }
}

export default resizeDisk
