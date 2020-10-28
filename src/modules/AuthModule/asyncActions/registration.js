import api from "utils/services/api";
import {ToastSuccess} from "components/Toasts/ToastSuccess";
import {ToastError} from "components/Toasts/ToasError";
import {authError, authSuccess} from "modules/AuthModule/auth.slice";


export const registration = (values) => async (dispatch) => {
    try {
        const {status, data} = await api.post('auth/registration', values)

        if (status === 200) {

            dispatch(authSuccess(data))

            ToastSuccess('Registration success')
        }

    } catch (e) {
        if (e.request.status === 409) {

            dispatch(authError(e.request.status))

            ToastError('login or email already exist')

        } else if (e.request.status === 400) {

            dispatch(authError(e.request.status))

            ToastError('Something went wrong')

        } else {
            dispatch(authError(e.request.status))
        }
    }
}