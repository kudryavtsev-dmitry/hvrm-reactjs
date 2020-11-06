import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMLoading, VMLoadSuccess } from '../VMList.slice'

export const saveVM = (name) => async (dispatch) => {
  try {
    dispatch(VMLoading())
    const { status, data } = await api.post('vm/save', {
      name: name,
    })

    if (status === 200) {
      dispatch(VMLoadSuccess(data))
      ToastSuccess(`${name} was saved`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default saveVM
