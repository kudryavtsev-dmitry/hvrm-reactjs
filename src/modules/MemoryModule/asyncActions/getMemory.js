import { ToastError } from 'components'
import api from 'utils/services/api'
import {
  GetMemorySuccess,
  MemoryLoading,
} from '../Memory.slice'

const getMemory = (name) => async (dispatch) => {
  try {
    dispatch(MemoryLoading())

    const { status, data } = await api.post(
      'vm/get-memory',
      {
        name: name,
      },
    )

    if (status === 200) {
      dispatch(GetMemorySuccess(data))
    }
  } catch (e) {
    ToastError('Unknown error')
  }
}

export default getMemory
