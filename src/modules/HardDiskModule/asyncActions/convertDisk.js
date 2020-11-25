import { ToastError, ToastInfo } from 'components/Toasts'
import apiWithoutTimeout from 'utils/services/apiWithoutTimeout'
import {
  DiskConverting,
  DiskLoadingStopped,
} from '../HardDisk.slice'
import getDiskData from './getDiskData'

const convertDisk = (name, path) => async (dispatch) => {
  try {
    dispatch(DiskConverting())

    const { status } = await apiWithoutTimeout.post(
      'vm/hard-disk/convert',
      {
        name,
        path,
      },
    )

    if (status === 200) {
      dispatch(getDiskData(name))
      ToastInfo(`Disk was converted`)
    }
  } catch (e) {
    ToastError('Unknown error')
    dispatch(DiskLoadingStopped())
  }
}

export default convertDisk
