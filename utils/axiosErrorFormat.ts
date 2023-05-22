import {  AxiosError, AxiosResponse } from "axios";

const FormatAxiosResponse =  (params: AxiosError  )=>{

    return params.response?.data

}

export default FormatAxiosResponse