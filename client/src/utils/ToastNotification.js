import { toast } from "react-toastify"

 const ToastSuccess=(message)=>{
 toast.success(message, {
    position:'top-right',
    autoClose: 1200,
    pauseOnHover:false
 })
}
 const ToastError=(message)=>{
 toast.error(message, {
    position:'top-right'
 })
}
 const ToastWarning=(message)=>{
 toast.warn(message, {
    position:'top-right'
 })
}

export {ToastSuccess,ToastError,ToastWarning};