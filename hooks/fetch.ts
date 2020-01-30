import { FetchStatusCode } from 'api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetchWithStore = <T>(
  fetchState: FetchStatusCode,
  fetchFunction: Function,
  fetchParams?: T,
) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchState === FetchStatusCode.OK) {
      return
    }

    dispatch(fetchFunction(fetchParams))
  }, [dispatch, fetchFunction, fetchParams, fetchState])
}
