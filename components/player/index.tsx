import styled from '@emotion/styled'
import { HttpStatusCode } from 'api'
import { Loader } from 'components/common/Loader'
import { PlayerButton } from 'components/player/PlayerButton'
import { PlayerTimeLine } from 'components/player/PlayerTimeLine'
import { RootState } from 'features'
import { Comment, Movie, movieSelectors, playerActions } from 'features/player'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Comments } from './Comments'


interface Props {}

const PlayerTop = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 24px 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0px 0px 25px 25px;
`

const CloseButton = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  background-image: url("/images/cancel_icon.png");
  background-size: cover;
  opacity: 0.3;
`

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(playerActions.fetch(1))
  }, [dispatch])

  const renderView = () => {
    return (
      <>
        <PlayerTop>
          <PlayerTitle>{title}</PlayerTitle>
          <CloseButton />
          <PlayerTimeLine />
          <PlayerButton />
        </PlayerTop>
        {
          comments.map((comment: Comment, index: number) => {
            const { kind, contents } = comment

            return (
              <Comments kind={kind} contents={contents} />
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
