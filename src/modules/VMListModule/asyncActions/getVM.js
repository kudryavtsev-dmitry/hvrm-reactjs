import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMLoadSuccess } from '../VMList.slice'

export const getVirtualMachines = () => async (
  dispatch,
) => {
  try {
    const { status, data } = await api.get('vm')

    if (status === 200) {
      dispatch(VMLoadSuccess(data))
      ToastSuccess('Enter success')
    }
  } catch (e) {
    console.log(e)
  }
}
