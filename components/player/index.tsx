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
import React, { useState } from 'react'
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

const show = keyframes`
  0% {
    max-height: 0;
  }

  100% {
    max-height: 500px;
  }
`

const PlayerTitle = styled<'h2', {isVisible: boolean}>('h2')`
  width: 100%;
  overflow: hidden;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  animation: ${({ isVisible }) => isVisible ? show : hide} 1s ease-out both 1;
`

export const Player: React.FC<Props> = () => {
  const [isVisible, setIsVisible] = useState(true)
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
    if (e.deltaY >= 0) {
      // setIsVisible(false)
      requestAnimationFrame(() => setIsVisible(false))

      return
      // requestAnimationFrame(() => setIsVisible(false))
    }
    requestAnimationFrame(() => setIsVisible(true))
    // setIsVisible(true)
    // requestAnimationFrame(() => setIsVisible(true))
  }

  useFetchWithStore<number>(fetchState, () => playerActions.fetch(1))

  const renderView = () => {
    return (
      <>
        <PlayerController>
          <PlayerTitle isVisible={isVisible}>{title}</PlayerTitle>
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
