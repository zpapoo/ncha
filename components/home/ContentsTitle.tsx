import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledContentsTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: -0.1em;

  margin-bottom: 12px;

  color: #cbcbcb;
`

export const ContentsTitle: React.FC<Props> = () => {
  return <StyledContentsTitle>시청 중인 콘텐츠</StyledContentsTitle>
}
