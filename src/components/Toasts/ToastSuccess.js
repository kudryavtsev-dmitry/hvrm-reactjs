import { toast } from 'react-toastify'

const ToastSuccess = (message) => {
  toast.success(`${message}`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
export default ToastSuccess
