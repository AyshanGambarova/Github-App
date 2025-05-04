import type {AxiosRequestConfig, AxiosResponse} from 'axios';
import axiosInstance from '@/apis/axios.config';

type TApiRequest = {
    url: string;
    data?: any;
    params?: any;
    config?: AxiosRequestConfig;
    responseType?: 'blob';
    headers?: any;
};

export const get = async ({url, ...config}: TApiRequest): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.get(url, config);
        return config.responseType ? response : response.data;
    } catch (err: any) {
        throw new Error(`Network error: ${err.message}`);
    }
};