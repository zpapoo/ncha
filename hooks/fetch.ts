import { HttpStatusCode } from 'api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetchWithStore = (
  fetchState: HttpStatusCode,
  fetchFunction: Function,
  fetchParams?: any,
) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchState === HttpStatusCode.OK) {
      return
    }

    dispatch(fetchFunction(fetchParams))
  }, [dispatch, fetchFunction, fetchParams, fetchState])
}
