import axios from 'axios';
import {APP_BASE_URL} from '@/config'

const axiosConfig = {
    baseURL: APP_BASE_URL,
};

const instance = axios.create(axiosConfig);

// Request Interceptor
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    }
);


export default instance;