import { cssTransition, toast } from 'react-toastify';

interface Prop {
    type: string,
    message: string,

}
  
const Notify = (prop: Prop) => {
    switch (prop.type) {
        case 'success':
            toast.success(prop.message, {
                position: toast.POSITION.TOP_RIGHT, 
            });
            break;

        case 'warning':
            toast.warning(prop.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        case 'error':
            toast.error(prop.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

        case 'info':
            toast.info(prop.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

        default:
            toast(prop.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
    }

};


export default Notify
