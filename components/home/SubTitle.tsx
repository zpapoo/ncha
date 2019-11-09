import styled from '@emotion/styled'
import React from 'react'

interface Props {}

const StyledSubTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  text-align: right;
  letter-spacing: -0.09em;

  padding-right: 16px;
  margin-top: 8px;

  color: rgba(255, 255, 255, 0.66);
`

export const SubTitle: React.FC<Props> = () => {
  return <StyledSubTitle>두번째는 비하인드 스토리와 함께</StyledSubTitle>
}
