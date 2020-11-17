import { ToastSuccess } from 'components'
import api from 'utils/services/api'
import { VMUpdateSuccess } from '../../VMListModule/VMList.slice'
import { MemoryLoading } from '../Memory.slice'
import getMemory from './getMemory'

const dynamicMemory = (
  name,
  min,
  max,
  startup,
  priority,
  buffer,
  index,
) => async (dispatch) => {
  try {
    dispatch(MemoryLoading())

    const { status, data } = await api.post(
      'vm/dynamic-memory',
      {
        name,
        min,
        max,
        startup,
        priority,
        buffer,
        index,
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
    console.log(e)
  }
}
export default dynamicMemory
