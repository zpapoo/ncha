import Axios, { AxiosError, AxiosInstance } from 'axios'
import { from, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

export enum HttpStatusCode {
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

export const requestGET = (url: string, params: object = {}) => {
  return from(axiosInstance.get(url, { params })).pipe(
    map(response => response.data),
    catchError(handleError),
  )
}

const handleError = (error: AxiosError) => {
  if (error.response) {
    return throwError(error.response)
  }

  return throwError(error)
}
