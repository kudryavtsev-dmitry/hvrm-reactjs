import { ToastError, ToastSuccess } from 'components'
import api from 'utils/services/api'
import {
  updatingVM,
  VMUpdateSuccess,
} from '../VMList.slice'

const updateVM = (name, index) => async (dispatch) => {
  try {
    dispatch(updatingVM(index))

    const { status, data } = await api.post('vm/update', {
      name: name,
    })

    if (status === 200) {
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`VM ${name} was updated!`)
    }
  } catch (e) {
    ToastError('Unknown error')
  }
}
export default updateVM
