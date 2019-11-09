import styled from '@emotion/styled'
import React from 'react'

const TitleWrapperDiv = styled.div`
  width: 100%;
`

interface Props {
  children: React.ReactNode
}

export const TitleWrapper = ({ children }: Props) => {
  return <TitleWrapperDiv>{children}</TitleWrapperDiv>
}
