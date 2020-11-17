import { ToastSuccess } from 'components'
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
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`${name} was stoped`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default stopVM
