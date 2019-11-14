import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledFooter = styled.div`
  padding: 20px 0;
  text-align: center;
  background-color: #000;

  color: #cbcbcb;
`

export const Footer: React.FC<Props> = () => {
  return <StyledFooter>@zpapoo</StyledFooter>
}
