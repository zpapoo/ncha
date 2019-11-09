import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const StyledContents = styled.div`
  margin: 36px 12px;
`

export const Contents: React.FC<Props> = ({ children }) => {
  return <StyledContents>{children}</StyledContents>
}
