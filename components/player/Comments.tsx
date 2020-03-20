import styled from '@emotion/styled'
import { COMMENT_MENU, COMMENT_MENU_COLOR, COMMENT_MENU_ICON } from 'constants/commentConstants'
import { COMMENT_KIND, COMMENT_TYPE } from 'constants/playerConstants'
import { useSwipeX } from 'hooks/useSwiper'
import React from 'react'
import { animated } from 'react-spring'

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

const Button = styled<'div', {type: COMMENT_MENU}>('div')`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${({ type }) => `/images/${COMMENT_MENU_ICON[type]}`});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ type }) => COMMENT_MENU_COLOR[type]};

  &:first-of-type {
    margin-bottom: 10px;
  }
`

export const Comments = ({ kind, contents, time }: Props) => {
  const { x, bind } = useSwipeX(100)

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
            {
              contents.map((content, index) => {
                return (
                  <SpeechBubble
                    key={`${kind}-${index}`}
                    time={time}
                    kind={kind}
                    content={content}
                  />
                )
              })
            }
          </div>
        </ContentWrapper>

      </animated.div>
      <animated.div {...bind()} style={
        {
          transform: x.interpolate(x => `translateX(${x}px)`),
          width: '32px',
          position: 'absolute',
          bottom: '0',
          right: '-60px',
        }
      } >
        <Button type={COMMENT_MENU.DECLARATION} />
        <Button type={COMMENT_MENU.LIKE} />
      </animated.div>
    </Wrapper>
  )
}
