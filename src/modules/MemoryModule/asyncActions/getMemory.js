import api from 'utils/services/api'
import {
  GetMemorySuccess,
  MemoryLoading,
} from '../Memory.slice'

const getMemory = (name) => async (dispatch) => {
  console.log(111111, name)
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
    console.log(e)
  }
}

export default getMemory
