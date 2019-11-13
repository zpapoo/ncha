import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledTitle = styled.div`
  flex-direction: column;
  font-weight: 900;
  font-size: 56px;
  line-height: 104.7%;

  padding-right: 16px;

  display: flex;
  text-align: right;
  letter-spacing: -0.05em;

  color: #ffffff;
`

export const Title: React.FC<Props> = () => {
  return (
    <StyledTitle>
      <span>nCha랑</span>
      <span>N차관람</span>
    </StyledTitle>
  )
}
