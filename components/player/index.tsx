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
import React from 'react'
import { useSelector } from 'react-redux'
import { renderByFetchState } from 'utils/renderUtils'

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

  const renderView = () => {
    return (
      <>
        <PlayerController>
          <PlayerTitle>{title}</PlayerTitle>
        </PlayerController>
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
      </>
    )
  }

  return renderByFetchState(fetchState, renderView)
}
