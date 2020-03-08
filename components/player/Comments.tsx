import styled from '@emotion/styled'
import { COMMENT_KIND, COMMENT_TYPE } from 'constants/playerConstants'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import { SpeechBubble } from './SpeechBubble'

interface Props {
  kind: COMMENT_TYPE
  contents: string[]
  time: number
}

const Wrapper = styled.div`
  position: relative;
  padding: 0px 13px 0px 9px;
  font-size: 12px;
  margin-bottom: 17px;
`

const ContentWrapper = styled.div`
  display: flex;
  will-change: transform;
`

const ProfileImage = styled.div`
  min-width: 39px;
  height: 39px;
  background: rgba(196, 196, 196, 0.57);
  border-radius: 50%;
  margin-right: 13px;
`

const Name = styled.span`
  color: rgba(255, 255, 255, 0.9);
`

const Button = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4E51FF;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -100px;
`
const getClosest = (arr: number[], target: number): number => {
  return arr.reduce((prev, curr) => {
    return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev)
  })
}

export const Comments = ({ kind, contents, time }: Props) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(({ movement: [mx], last }) => {
    let newX = 0

    // last: mouseUp
    if (last) {
      newX = getClosest([-150, 0], x.getValue())
    } else {
      newX = mx
    }

    set({ x: newX })
  }, {
    bounds: { left: -150, right: 150 },
    rubberband: true,
  })

  return (
    <Wrapper>
      <animated.div {...bind()} style={
        {
          transform: x.interpolate(x => `translateX(${x}px)`),
        }
      } >
        <ContentWrapper>
          <ProfileImage />
          <div>
            <Name>{COMMENT_KIND[kind]}</Name>
            {contents.map((content: string, index: number) => {
              return (
                <SpeechBubble
                  key={`${kind}-${index}`}
                  time={time}
                  kind={kind}
                  content={content}
                />
              )
            })}
          </div>
        </ContentWrapper>

      </animated.div>
      <animated.div {...bind()} style={
        {
          transform: x.interpolate(x => `translateX(${x}px)`),
        }
      } >
        <Button />
      </animated.div>
    </Wrapper>
  )
}
