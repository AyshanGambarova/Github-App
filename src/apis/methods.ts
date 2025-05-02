import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from '@/apis/axios.config';

type TApiRequest = {
    url: string;
    data?: any;
    params?: any;
    config?: AxiosRequestConfig;
    responseType?: 'blob';
    headers?: any;
};

export const methodGet = async ({ url, ...config }: TApiRequest): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.get(url, config);
        return config.responseType ? response : response.data;
    } catch (err: any) {
        throw new Error(`Network error: ${err.message}`);
    }
};

export const methodPost = async ({ url, data, ...config }: TApiRequest): Promise<any> => {
    try {
        const body = data && typeof data === 'object' && Object.keys(data).length > 0 ? data : undefined;
        const response: AxiosResponse = await axiosInstance.post(url, body, config);
        return response.data;
    } catch (err: any) {
        throw new Error(`Network error: ${err.message}`);
    }
};

export const methodPut = async ({ url, data, ...config }: TApiRequest): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.put(url, data, config);
        return response.data;
    } catch (err: any) {
        throw new Error(`Network error: ${err.message}`);
    }
};

export const methodPatch = async ({ url, data, ...config }: TApiRequest): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.patch(url, data, config);
        return response.data;
    } catch (err: any) {
        throw new Error(`Network error: ${err.message}`);
    }
};

export const methodDelete = async ({ url, ...config }: TApiRequest): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.delete(url, config);
        return response.data;
    } catch (err: any) {
        throw new Error(`Network error: ${err.message}`);
    }
};
