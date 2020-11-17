import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import {
  updatingVM,
  VMUpdateSuccess,
} from '../../VMListModule/VMList.slice'

const addMemory = (name, size, index) => async (
  dispatch,
) => {
  try {
    dispatch(updatingVM(index))

    const { status, data } = await api.post(
      'vm/add-memory',
      {
        name: name,
        size: size,
      },
    )

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
export default addMemory
