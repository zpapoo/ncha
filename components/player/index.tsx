import styled from '@emotion/styled'
import { FetchStatusCode } from 'api'
import { RootState } from 'features'
import {
  Comment,
  fetchMovieInfo,
  Movie,
  movieSelectors,
} from 'features/player'
import { useFetchWithStore } from 'hooks/fetch'
import React from 'react'
import { useSelector } from 'react-redux'
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
  const fetchState = useSelector<RootState, FetchStatusCode>(state =>
    movieSelectors.movieFetchState(state.player),
  )
  const { title } = useSelector<RootState, Movie>(state =>
    movieSelectors.movie(state.player),
  )
  const currentComment = useSelector<RootState, Comment[]>(state =>
    movieSelectors.currentComments(state.player),
  )

  useFetchWithStore<number>(fetchState, () => fetchMovieInfo(1))

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
      </>
    )
  }

  return renderByFetchState(fetchState, renderView)
}
