import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMLoading, VMLoadSuccess } from '../VMList.slice'

export const stopVM = (name) => async (dispatch) => {
  try {
    dispatch(VMLoading())
    const { status, data } = await api.post('vm/stop', {
      name: name,
    })

    if (status === 200) {
      dispatch(VMLoadSuccess(data))
      ToastSuccess(`${name} was stoped`)
    }
  } catch (e) {
    console.log(e)
  }
}
