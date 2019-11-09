import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledContentsItem = styled.li`
  min-width: 172px;
  height: 120px;
  margin: 0 6px;
`

const StyledImage = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url('/images/item_example.jpeg');
  background-size: cover;
`

export const ContentsItem: React.FC<Props> = () => {
  return (
    <StyledContentsItem>
      <StyledImage />
    </StyledContentsItem>
  )
}
