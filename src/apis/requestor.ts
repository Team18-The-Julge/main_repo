import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

import requestInterceptor from '@/apis/interceptors';

const axiosRequestConfig: AxiosRequestConfig = {
  // 3-18로 수정할 것
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/0-1/the-julge`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};

const apiRequestor: AxiosInstance = axios.create(axiosRequestConfig); // Token 필요 X
const apiRequestorToken: AxiosInstance = axios.create(axiosRequestConfig); // Token 필요 O

apiRequestorToken.interceptors.request.use(requestInterceptor);
// apiRequestorToken.interceptors.response.use(successInterceptor, errorInterceptor);

export { apiRequestor, apiRequestorToken };
