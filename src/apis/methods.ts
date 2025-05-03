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

const handleError = (error: any): never => {
    throw new Error(`Network error :${error.message}`);
}

const request = async (
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    {url, data, ...config}: TApiRequest
): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance[method](url, data ?? undefined, config);
        return config.responseType ? response : response.data;
    } catch (error: any) {
        handleError(error);
    }
}

export const get = (payload: TApiRequest): Promise<any> => request('get', payload);