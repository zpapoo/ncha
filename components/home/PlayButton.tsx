import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledPlayButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 9px 24px;
  background: rgba(224, 17, 95, 0.71);
  font-weight: bold;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.66);
`

export const PlayButton: React.FC<Props> = () => {
  return <StyledPlayButton>바로 재생하기</StyledPlayButton>
}
