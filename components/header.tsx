import styled from '@emotion/styled'
import React from 'react'

interface IHeaderProps {}

const HeaderDiv = styled.div`
  color: red;
`

export const Header: React.FC<IHeaderProps> = () => {
  return <HeaderDiv>header test</HeaderDiv>
}
