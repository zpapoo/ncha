import { FetchStatusCode } from 'api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetchWithStore = <T>(
  fetchState: FetchStatusCode,
  fetchFunction: Function,
) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchState === FetchStatusCode.OK) {
      return
    }

    dispatch(fetchFunction())
  }, [dispatch, fetchFunction, fetchState])
}
