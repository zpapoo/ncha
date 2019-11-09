import React from 'react'

import { Contents } from './Contents'
import { ContentsItem } from './ContentsItem'
import { ContentsList } from './ContentsList'
import { ContentsTitle } from './ContentsTitle'
import { Footer } from './Footer'
import { HotContents } from './HotContents'
import { MainTop } from './MainTop'
import { SubTitle } from './SubTitle'
import { Title } from './Title'
import { TitleWrapper } from './TitleWrapper'

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <>
      <MainTop />
      <TitleWrapper>
        <Title></Title>
        <SubTitle></SubTitle>
      </TitleWrapper>
      <HotContents />
      <Contents>
        <ContentsTitle />
        <ContentsList>
          <ContentsItem />
          <ContentsItem />
          <ContentsItem />
          <ContentsItem />
        </ContentsList>
      </Contents>
      <Contents>
        <ContentsTitle />
        <ContentsList>
          <ContentsItem />
          <ContentsItem />
          <ContentsItem />
          <ContentsItem />
        </ContentsList>
      </Contents>
      <Contents>
        <ContentsTitle />
        <ContentsList>
          <ContentsItem />
          <ContentsItem />
          <ContentsItem />
          <ContentsItem />
        </ContentsList>
      </Contents>
      <Footer />
    </>
  )
}
