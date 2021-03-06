import { ToastError, ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMLoading, VMLoadSuccess } from '../VMList.slice'

const getVM = () => async (dispatch) => {
  try {
    dispatch(VMLoading())

    const { status, data } = await api.get('vm')

    if (status === 200) {
      dispatch(VMLoadSuccess(data))
      ToastSuccess('Load success')
    }
  } catch (e) {
    ToastError('Unknown error')
  }
}

export default getVM
