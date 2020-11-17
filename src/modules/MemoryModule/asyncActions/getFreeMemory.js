import api from 'utils/services/api'
import { ServerMemoryLoadSuccess } from '../Memory.slice'

const getFreeMemory = () => async (dispatch) => {
  try {
    const { status, data } = await api.get('server/memory')

    console.log(data.OsFreePhysicalMemory)

    if (status === 200) {
      dispatch(
        ServerMemoryLoadSuccess(data.OsFreePhysicalMemory),
      )
    }
  } catch (e) {
    console.log(e)
  }
}

export default getFreeMemory
