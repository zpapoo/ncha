import styled from '@emotion/styled'
import React from 'react'

interface Props {
  width: number;
}

const Slide = styled<'div', Props>('div')`
  background: linear-gradient(to right, #EF4D88 0%, #4E51FF 100%);
  height: 100%;
  width: ${(props) => `${props.width}%`};
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4E51FF;
  }
`

export const PlayerSlide = ({width}: Props) => {
  return (
    <Slide width={width} />
  )
}
