import {toast} from "react-toastify";


export const ToastError = (message) =>{
    toast.error(`${message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
