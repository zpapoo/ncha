import { HttpStatusCode } from 'api'
import { Loader } from 'components/common/Loader'
import React from 'react'

export const renderByFetchState = (
  fetchState: HttpStatusCode,
  renderView: (params?: any) => React.ReactElement,
) => {
  switch(fetchState) {
  case HttpStatusCode.LOADING:
    return <Loader />
  default:
    return renderView()
  }
}
