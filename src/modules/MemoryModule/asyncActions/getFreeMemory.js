import api from 'utils/services/api'
import {
  MemoryLoading,
  ServerMemoryLoadSuccess,
} from '../Memory.slice'

const getFreeMemory = () => async (dispatch) => {
  try {
    dispatch(MemoryLoading())
    const { status, data } = await api.get('server/memory')

    console.log(data)

    if (status === 200) {
      dispatch(ServerMemoryLoadSuccess(data))
    }
  } catch (e) {
    console.log(e)
  }
}

export default getFreeMemory
