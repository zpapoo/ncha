import Head from 'next/head'
import React from 'react'

import { Header } from '../components/header'

const Home = () => (
  <>
    <Header />
    <Head>
      <title>Home</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
    </Head>
    <div>nCha</div>
  </>
)

export default Home
