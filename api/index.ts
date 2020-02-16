import Axios, { AxiosError, AxiosInstance } from 'axios'

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

export const requestGET = async(url: string, {
  params = {},
  headers = {},
} = {}) => {
  try {
    return await axiosInstance.get(url, { params, headers })
  } catch (error) {
    return handleError(error)
  }
}

export const requestPOST = async(
  url: string,
  data: object = {},
  {
    params = {},
    headers = {},
  } = {},
) => {
  try {
    return await axiosInstance.post(url, data, { params, headers })
  } catch (error) {
    return handleError(error)
  }
}

const handleError = (error: AxiosError) => {
  if (error.response) {
    throw error.response
  }

  throw (error)
}
