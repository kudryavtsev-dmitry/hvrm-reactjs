import apiWithoutTimeout from 'utils/services/apiWithoutTimeout'
import {
  DiskLoading,
  ResizeDiskSuccess,
} from '../HardDisk.slice'
import getDiskData from './getDiskData'

const convertDisk = (name, path) => async (dispatch) => {
  try {
    dispatch(DiskLoading())

    const { status, data } = await apiWithoutTimeout.post(
      'vm/hard-disk/convert',
      {
        name,
        path,
      },
    )

    if (status === 200) {
      dispatch(getDiskData(name))
    }
  } catch (e) {
    console.log(e)
  }
}

export default convertDisk
