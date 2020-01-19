import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

const Flex = styled.div`
  display: flex;
`

export const FlexWrapper = ({ children }: Props) => {
  return (
    <Flex>
      {children}
    </Flex>
  )
}
