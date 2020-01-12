import styled from '@emotion/styled'
import { HttpStatusCode } from 'api'
import { Loader } from 'components/common/Loader'
import { RootState } from 'features'
import {
  Comment,
  Movie,
  movieSelectors,
  playerActions,
  playerSelectors,
  PlayerTime,
} from 'features/player'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(playerActions.fetch(1))
  }, [dispatch])

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
              return <></>
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
  const renderByFetchState = () => {
    switch(fetchState) {
    case HttpStatusCode.LOADING:
      return <Loader />
    default:
      return renderView()
    }
  }

  return renderByFetchState()
}
