import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledFooter = styled.div`
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;

  color: #cbcbcb;
`

export const Footer: React.FC<Props> = () => {
  return <StyledFooter>@zpapoo</StyledFooter>
}
