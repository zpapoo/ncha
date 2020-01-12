import styled from '@emotion/styled'
import { HttpStatusCode } from 'api'
import { RootState } from 'features'
import {
  Comment,
  Movie,
  movieSelectors,
  playerActions,
  playerSelectors,
  PlayerTime,
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
  const fetchState = useSelector<RootState, HttpStatusCode>(state =>
    movieSelectors.movieFetchState(state.player),
  )
  const { title, comments } = useSelector<RootState, Movie>(state =>
    movieSelectors.movie(state.player),
  )
  const time = useSelector<RootState, PlayerTime>(state =>
    playerSelectors.times(state.player),
  )
  const { current } = time

  useFetchWithStore(
    fetchState, playerActions.fetch, 1,
  )

  const renderView = () => {
    return (
      <>
        <PlayerController time={time}>
          <PlayerTitle>{title}</PlayerTitle>
        </PlayerController>
        {
          comments.map((comment: Comment, index: number) => {
            const { kind, contents, time } = comment
            if (time >= current) {
              return <div key={`${kind}-${index}`}/>
            }

            return (
              <Comments
                key={`${kind}-${index}`}
                kind={kind}
                contents={contents}
              />
            )
          })
        }
      </>
    )
  }

  return renderByFetchState(fetchState, renderView)
}
