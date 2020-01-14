import styled from '@emotion/styled'
import { formatTime } from 'utils/time'

interface Props {
  content: string
  time: number
}

interface Time {
  time: number
}

const Bubble = styled<'div', Time>('div')`
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
      border-right: 9px solid rgba(104, 127, 209, 0.5);
    }
  }

  &:last-of-type {
    &:after {
      content: '${props => formatTime(props.time)}';
      position: absolute;
      left: 100%;
    }
  }
`

export const SpeechBubble = ({ content, time }: Props) => {
  return <Bubble time={50}>{content}</Bubble>
}
