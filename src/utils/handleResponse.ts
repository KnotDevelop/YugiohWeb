import { AxiosError, AxiosResponse } from "axios"
export interface IResponse {
    status: number | undefined;
    error?: AxiosError<AxiosResponse<AxiosResponse<any, any>, any>> | AxiosResponse<any, any> | undefined;
    statusText: string;
}

export const handleResponse = {
    success: (response: AxiosResponse) => {
        return {
            status: response.status,
            data: response.data,
            statusText: response.statusText
        }
    },
    error: (response: AxiosError<AxiosResponse>): IResponse => {
        if (response.message === 'Network Error') {
            return {
                status: 500,
                error: response,
                statusText: ""
            }
        }
        else {
            return {
                status: response.request?.status,
                error: response.request?.data,
                statusText: response.request?.statusText
            }
        }
    }
}