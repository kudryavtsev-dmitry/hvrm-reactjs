import { ToastError, ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMUpdateSuccess } from '../../VMListModule/VMList.slice'
import { MemoryLoading } from '../Memory.slice'
import getMemory from './getMemory'

const addMemory = (name, size, index) => async (
  dispatch,
) => {
  try {
    dispatch(MemoryLoading())

    const { status, data } = await api.post(
      'vm/add-memory',
      {
        name: name,
        size: size,
      },
    )

    if (status === 200) {
      dispatch(getMemory(name))
      dispatch(
        VMUpdateSuccess({ index: index, data: data }),
      )
      ToastSuccess(`VM ${name} was updated!`)
    }
  } catch (e) {
    ToastError('Unknown error')
  }
}
export default addMemory
