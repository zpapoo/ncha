import { css, Global } from '@emotion/core'
import store from 'features'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Global
          styles={css`
            body {
              margin: auto;
              max-width: 520px;
              background-color: #141414;
              overflow-x: hidden;
              min-height: 100%;
              font-family: "Noto Sans KR", Helvetica, Arial, sans-serif;
            }
          `}
        />
        <div className="wrap">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      </>
    )
  }
}
