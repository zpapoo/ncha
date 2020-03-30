import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { FetchStatusCode } from 'api'
import { RootState } from 'features'
import {
  Comment,
  Movie,
  movieSelectors,
  playerActions,
} from 'features/playerSlice'
import { useFetchWithStore } from 'hooks/useFetch'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { renderByFetchState } from 'utils/renderUtils'

import { Comments } from './Comments'
import { PlayerController } from './PlayerController'

interface Props {}

const COMMENT_WRAPPER = 'commentWrapper'

const hide = keyframes`
  0% {
    max-height: 500px;
  }

  100% {
    max-height: 0;
  }
`

const PlayerTitle = styled.h2`
  width: 100%;
  overflow: hidden;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  animation: ${hide} 1s ease-out both 1;
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

  // TODO: Move to custom hook
  const handleWheel = (e: React.WheelEvent) => {
    console.log(e.deltaY)
  }

  useFetchWithStore<number>(fetchState, () => playerActions.fetch(1))

  const renderView = () => {
    return (
      <>
        <PlayerController>
          <PlayerTitle>{title}</PlayerTitle>
        </PlayerController>
        <div id={COMMENT_WRAPPER} onWheel={handleWheel}>
          {
            currentComment.map((comment: Comment) => {
              const { kind, contents, time, id } = comment

              return (
                <Comments
                  key={id}
                  kind={kind}
                  contents={contents}
                  time={time}
                />
              )
            })
          }
        </div>
      </>
    )
  }

  return renderByFetchState(fetchState, renderView)
}
