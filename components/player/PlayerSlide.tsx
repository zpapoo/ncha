import styled from '@emotion/styled'
import React from 'react'

interface Props {
  width: number;
}

const  Slide = styled<'div', Props>('div')`
  background: linear-gradient(to right, #EF4D88 0%, #4E51FF 100%);
  height: 100%;
  width: ${(props) => `${props.width}%`};
`

export const PlayerSlide = ({width}: Props) => {
  return (
    <Slide width={width} />
  )
}
