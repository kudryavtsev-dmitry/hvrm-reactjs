import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import {
  updatingVM,
  VMUpdateSuccess,
} from '../VMList.slice'

const suspendVM = (name, index) => async (dispatch) => {
  try {
    dispatch(updatingVM(index))
    const { status, data } = await api.post('vm/suspend', {
      name: name,
    })

    if (status === 200) {
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`${name} was suspended`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default suspendVM
