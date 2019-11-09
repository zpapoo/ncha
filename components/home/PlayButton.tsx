import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledPlayButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 128px;
  height: 32px;
  background: rgba(224, 17, 95, 0.71);
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* letter-spacing: -0.09em; */

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.66);
`

export const PlayButton: React.FC<Props> = () => {
  return <StyledPlayButton>바로 재생하기</StyledPlayButton>
}
