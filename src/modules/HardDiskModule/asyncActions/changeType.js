import { ToastSuccess } from 'components'
import { ToastError, ToastInfo } from 'components/Toasts'
import apiWithoutTimeout from 'utils/services/apiWithoutTimeout'
import { DiskConverting } from '../HardDisk.slice'
import getDiskData from './getDiskData'

const changeType = (path, name, type) => async (
  dispatch,
) => {
  try {
    dispatch(DiskConverting())
    const { status, data } = await apiWithoutTimeout.post(
      'vm/hard-disk/type',
      {
        path,
        name,
        type,
      },
    )

    if (status === 200) {
      dispatch(getDiskData(name))
      ToastInfo(`type was changed`)
    }
  } catch (e) {
    ToastError('unknown error')
  }
}

export default changeType
