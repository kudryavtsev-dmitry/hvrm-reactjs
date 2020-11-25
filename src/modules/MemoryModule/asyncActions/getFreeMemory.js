import { ToastError } from 'components'
import api from 'utils/services/api'
import {
  MemoryLoading,
  ServerMemoryLoadSuccess,
} from '../Memory.slice'

const getFreeMemory = () => async (dispatch) => {
  try {
    dispatch(MemoryLoading())
    const { status, data } = await api.get('server/memory')

    if (status === 200) {
      dispatch(ServerMemoryLoadSuccess(data))
    }
  } catch (e) {
    ToastError('Unknown error')
  }
}

export default getFreeMemory
