import styled from '@emotion/styled'
import { COMMENT_KIND, COMMENT_TYPE } from 'constants/playerConstants'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { getClosest } from 'utils/array'

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
  touch-action: pan-y;
  overflow: hidden;
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
`


export const Comments = ({ kind, contents, time }: Props) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(({ movement: [mx], last }) => {

    // last: mouseUp
    const newX = last ? getClosest([-100, 0], x.getValue()) : mx

    set({ x: newX })
  }, {
    bounds: { left: -100, right: 100 },
    rubberband: true, // 경계 벗어날때 탄성계수
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
          width: '32px',
          height: '32px',
          position: 'absolute',
          bottom: '0',
          right: '-60px',
        }
      } >
        <Button />
      </animated.div>
    </Wrapper>
  )
}
