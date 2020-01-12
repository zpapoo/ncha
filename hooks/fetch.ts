import { HttpStatusCode } from 'api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetchWithStore = <T>(
  fetchState: HttpStatusCode,
  fetchFunction: Function,
  fetchParams?: T,
) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchState === HttpStatusCode.OK) {
      return
    }

    dispatch(fetchFunction(fetchParams))
  }, [dispatch, fetchFunction, fetchParams, fetchState])
}
