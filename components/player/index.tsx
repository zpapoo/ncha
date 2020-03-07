import styled from '@emotion/styled'
import { FetchStatusCode } from 'api'
import { RootState } from 'features'
import {
  Comment,
  Movie,
  movieSelectors,
  playerActions,
} from 'features/playerSlice'
import { useFetchWithStore } from 'hooks/fetch'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { renderByFetchState } from 'utils/render'

import { Comments } from './Comments'
import { PlayerController } from './PlayerController'

interface Props {}

const PlayerTitle = styled.h2`
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;

  color: #ffffff;
`

export const Player: React.FC<Props> = () => {
  const fetchState = useSelector<RootState, FetchStatusCode>(
    movieSelectors.movieFetchState,
  )
  const { title } = useSelector<RootState, Movie>(
    movieSelectors.movie,
  )
  const currentComment = useSelector<RootState, Comment[]>(
    movieSelectors.currentComments,
  )

  useFetchWithStore<number>(fetchState, () => playerActions.fetch(1))
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 })
  })

  const renderView = () => {
    return (
      <>
        <PlayerController>
          <PlayerTitle>{title}</PlayerTitle>
        </PlayerController>
        {currentComment.map((comment: Comment, index: number) => {
          const { kind, contents, time } = comment

          return (
            <Comments
              key={`${kind}-${index}`}
              kind={kind}
              contents={contents}
              time={time}
            />
          )
        })}
        <animated.div {...bind()} style={
          {
            transform: x.interpolate(x => `translateX(${x}px)`),
            left: y,
            color: 'white',
            padding: '20px',
            border:'1px solid white',
          }
        } >
        Test Move
        </animated.div>

      </>
    )
  }

  return renderByFetchState(fetchState, renderView)
}
