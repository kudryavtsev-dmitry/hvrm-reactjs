import api from 'utils/services/api'
import {
  GetDiskSuccess,
  DiskLoading,
} from '../HardDisk.slice'

const getDiskData = (name) => async (dispatch) => {
  console.log(111111, name)
  try {
    dispatch(DiskLoading())

    const { status, data } = await api.post(
      'vm/hard-disk',
      {
        name: name,
      },
    )

    console.log(data)

    if (status === 200) {
      dispatch(GetDiskSuccess(data))
    }
  } catch (e) {
    console.log(e)
  }
}

export default getDiskData
