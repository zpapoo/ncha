import { css, Global } from "@emotion/core"
import App from "next/app"
import React from "react"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Global
          styles={css`
            html,
            body {
              margin: auto;
              max-width: 520px;
              background-color: #141414;
              min-height: 100%;
              font-family: "Noto Sans KR", Helvetica, Arial, sans-serif;
            }
          `}
        />
        <div className="wrap">
          <Component {...pageProps} />
        </div>
      </>
    )
  }
}
