import styled from '@emotion/styled'
import React from 'react'

import { PlayButton } from './PlayButton'

interface Props {}

const HotContentsWrapper = styled.div`
  position: relative;
  margin-top: 24px;
`

const StyledImage = styled.img`
  width: 100%;
`

export const HotContents: React.FC<Props> = () => {
  return (
    <HotContentsWrapper>
      <StyledImage
        src="/images/hot_contents_example.jpg"
        alt="hot_contents_info"
      />
      <PlayButton />
    </HotContentsWrapper>
  )
}
