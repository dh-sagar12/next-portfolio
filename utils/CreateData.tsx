import axios from "axios";
import Notify from "./toastify";
import FormatAxiosResponse from "./axiosErrorFormat";

const CreateData = (api: string, data: any) => {
    axios.post(api, data).then(res => {
        if (res.status == 201) {
            Notify({ message: res.data.message, type: 'success' })
        }
        else {
            console.log(res.data);
            Notify({ message: 'Something Went Wrong', type: 'error' })
        }
    }).catch(error => {
        console.log(error);
        let response: any = FormatAxiosResponse(error);
        Notify({ message: response?.message?.meta?.target, type: 'error' })

    })
}

export default CreateData;