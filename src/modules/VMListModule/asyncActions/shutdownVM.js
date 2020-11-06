import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMLoading, VMLoadSuccess } from '../VMList.slice'

const shutdownVM = (name) => async (dispatch) => {
  try {
    dispatch(VMLoading())
    const { status, data } = await api.post('vm/shutdown', {
      name: name,
    })

    if (status === 200) {
      dispatch(VMLoadSuccess(data))
      ToastSuccess(`${name} was shutdown`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default shutdownVM
