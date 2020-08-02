import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { useWheel } from 'hooks/useWheel'
import React from 'react'

const hide = keyframes`
  0% {
    max-height: 500px;
  }

  100% {
    max-height: 0;
  }
`

const show = keyframes`
  0% {
    max-height: 0;
  }

  100% {
    max-height: 500px;
  }
`

const Container = styled<'div', {isVisible: boolean}>('div')`
  animation: ${({ isVisible }) => isVisible ? show : hide} 0.7s ease-in-out forwards 1;
  overflow: hidden;
`

interface Props {
  children: React.ReactNode;
}

export const HideWrapper = ({ children }: Props) => {
  const { isVisible } = useWheel()

  return (
    <Container isVisible={isVisible}>
      { children }
    </Container>
  )
}
