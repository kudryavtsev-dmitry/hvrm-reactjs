import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMLoading, VMLoadSuccess } from '../VMList.slice'

const startVM = (name) => async (dispatch) => {
  try {
    dispatch(VMLoading())
    const { status, data } = await api.post('vm/start', {
      name: name,
    })

    if (status === 200) {
      dispatch(VMLoadSuccess(data))
      ToastSuccess(`${name} was started`)
    }
  } catch (e) {
    console.log(e)
  }
}
export default startVM
