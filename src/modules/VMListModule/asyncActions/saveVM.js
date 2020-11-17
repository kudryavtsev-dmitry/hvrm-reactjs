import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import {
  updatingVM,
  VMUpdateSuccess,
} from '../VMList.slice'

export const saveVM = (name, index) => async (dispatch) => {
  try {
    dispatch(updatingVM(index))
    const { status, data } = await api.post('vm/save', {
      name: name,
    })

    if (status === 200) {
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`${name} was saved`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default saveVM
