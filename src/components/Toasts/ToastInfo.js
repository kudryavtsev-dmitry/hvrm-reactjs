import { toast } from 'react-toastify'

const ToastSuccess = (message) => {
  toast.info(`${message}`, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
export default ToastSuccess
