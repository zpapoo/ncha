import styled from '@emotion/styled'
import { COMMENT_KIND, COMMENT_TYPE } from 'constants/playerConstants'
import React from 'react'

import { SpeechBubble } from './SpeechBubble'

interface Props {
  kind: COMMENT_TYPE
  contents: string[]
  time: number
}

const Wrapper = styled.div`
  padding: 0px 13px 0px 9px;
  font-size: 12px;
  margin-bottom: 17px;
`

const ContentWrapper = styled.div`
  display: flex;
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

export const Comments = ({ kind, contents, time }: Props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
