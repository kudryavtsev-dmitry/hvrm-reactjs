import api from 'utils/services/api'
import {
  authError,
  authLoading,
  authSuccess,
} from 'modules/AuthModule/auth.slice'
import { ToastError } from 'components'
import { ToastSuccess } from 'components'

export const authUser = (values) => async (dispatch) => {
  try {
    dispatch(authLoading())

    const { status, data } = await api.post(
      'auth/authenticate',
      values,
    )

    if (status === 200) {
      dispatch(authSuccess(data))

      localStorage.setItem(
        'jwt',
        JSON.stringify({ jwt: data.jwt }),
      )
      localStorage.setItem(
        'user',
        JSON.stringify({
          login: data.login,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        }),
      )

      ToastSuccess('Enter success')
    }
  } catch (e) {
    if (e.request.status === 401) {
      dispatch(authError(e.request.status))

      ToastError('wrong login or password')
    }
  }
}
