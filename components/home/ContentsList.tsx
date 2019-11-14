import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const StyledContentsList = styled.ul`
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: auto;
`

export const ContentsList: React.FC<Props> = ({ children }: Props) => {
  return <StyledContentsList>{children}</StyledContentsList>
}
