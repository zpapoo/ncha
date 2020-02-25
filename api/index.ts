import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

export enum FetchStatusCode {
  LOADING = 99,
  OK = 200,
  UNAUTHORIZED = 401,
  UNKNOWN = 500,
  NOT_FOUND = 404,
}

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: 'https://sample.com',
  timeout: 1000,
  headers: {},
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
  // 오류 응답을 처리
  // ...
    throw error.response
  },
)
