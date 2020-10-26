import api from "../../../constants/api";
import {authError, authLoading, authSuccess} from "../auth.slice";
import {ToastError} from "../../../components/Toasts/ToasError";
import {ToastSuccess} from "../../../components/Toasts/ToastSuccess";

export const authUser = (values) => async (dispatch) => {
    try {

        dispatch(authLoading())

        const { status, data } = await api.post('auth/authenticate', values)

        if (status === 200) {

            dispatch(authSuccess(data))

            localStorage.setItem('user', JSON.stringify(data))

            ToastSuccess('Enter success')
        }
    } catch (e) {
        if (e.request.status === 401) {

            dispatch(authError(e.request.status))

            ToastError('wrong login or password')
        }
    }
}