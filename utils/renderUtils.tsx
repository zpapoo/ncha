import { FetchStatusCode } from 'api'
import { Loader } from 'components/common/Loader'
import React from 'react'

export const renderByFetchState = (
  fetchState: FetchStatusCode,
  renderView: (params?: any) => React.ReactElement,
) => {
  switch(fetchState) {
  case FetchStatusCode.LOADING:
    return <Loader />
  default:
    return renderView()
  }
}
