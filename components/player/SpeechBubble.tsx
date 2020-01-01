import styled from '@emotion/styled'
import React from 'react'

interface Props {
  data: {
    name: string
    comments: string[]
  }
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

const Name = styled.span`
  color: rgba(255, 255, 255, 0.9);
`

export const SpeechBubble = ({ data }: Props) => {
  const { name, comments } = data

  return (
    <Wrapper>
      <ContentWrapper>
        <ProfileImage />
        <div>
          <Name>{name}</Name>
          {
            comments.map((comment: string, index: number) => {
              return (
                <Bubble key={`${name}-${index}`}>
                  {comment}
                </Bubble>
              )
            })
          }
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}
