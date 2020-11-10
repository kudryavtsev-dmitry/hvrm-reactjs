import { ToastSuccess } from 'components'
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
      console.log(data)
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`VM ${name} was updated!`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default updateVM
