import styled from '@emotion/styled'
import React from 'react'

interface Props {
  content: string
}

const Bubble = styled.div`
  display: inline-block;
  position: relative;
  background: rgba(104, 127, 209, 0.5);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 9px;
  margin-top: 9px;
  line-height: 15px;

  &:first-of-type {
    &:before {
      content: '';
      position: absolute;
      top: 20%;
      left: -9px;
      width: 0;
      height: 0;
      border-top: 0px solid transparent;
      border-radius: 1px 0 0 0;
      border-bottom: 12px solid transparent;
      border-right: 9px solid rgba(104,127,209,0.5);
    }

  }
`

export const SpeechBubble = ({ content }: Props) => {

  return (
    <Bubble>
      {content}
    </Bubble>
  )
}
