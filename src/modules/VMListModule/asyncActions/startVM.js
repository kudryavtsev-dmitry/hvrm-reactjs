import { ToastSuccess } from 'components'
import { getFreeMemory } from 'modules/MemoryModule/asyncActions'
import api from 'utils/services/api'
import {
  updatingVM,
  VMUpdateSuccess,
} from '../VMList.slice'

const startVM = (name, index) => async (dispatch) => {
  console.log(name, index)
  try {
    dispatch(updatingVM(index))

    const { status, data } = await api.post('vm/start', {
      name: name,
    })

    if (status === 200) {
      console.log(data)
      dispatch(getFreeMemory())
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )

      ToastSuccess(`${name} was started`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default startVM
