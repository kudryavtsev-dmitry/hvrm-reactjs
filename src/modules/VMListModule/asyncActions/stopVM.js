import { ToastError, ToastSuccess } from 'components'
import { getFreeMemory } from 'modules/MemoryModule/asyncActions'
import api from 'utils/services/api'
import {
  updatingVM,
  VMUpdateSuccess,
} from '../VMList.slice'

const stopVM = (name, index) => async (dispatch) => {
  try {
    dispatch(updatingVM(index))
    const { status, data } = await api.post('vm/stop', {
      name: name,
    })

    if (status === 200) {
      dispatch(getFreeMemory())
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`${name} was stoped`)
    }
  } catch (e) {
    ToastError('Unknown error')
  }
}
export default stopVM
