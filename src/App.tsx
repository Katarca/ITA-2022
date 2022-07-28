import { CounterApp } from './homework2/CounterApp'
import { HomePage } from './HomePage'
import { JavaScriptWeb } from './homework1/JavaScriptWeb'
import { Route, Routes } from 'react-router-dom'
import { colors } from './helpers/theme'
import { createGlobalStyle } from 'styled-components'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path={urls.homeUrl} element={<HomePage />} />
        <Route path={urls.jsWebUrl} element={<JavaScriptWeb />} />
        <Route path={urls.counterAppUrl} element={<CounterApp />} />
      </Routes>
      <GlobalStyle />
    </StyledApp>
  )
}

const StyledApp = styled.div``

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html {
    font-size: 62.5%;
    }

    body {
    box-sizing: border-box;
    background-color: ${colors.blue900};
    font-family: 'IBM Plex Mono', monospace;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
    body::-webkit-scrollbar {
    display: none;
  }

`
