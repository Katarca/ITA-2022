import { CounterApp } from './homework2/CounterApp'
import { HomePage } from './pages/HomePage'
import { JavaScriptWeb } from './homework1/JavaScriptWeb'
import { Route, Routes } from 'react-router-dom'
import { StyledApp } from './page-style/StyledApp'
import { colors } from './helpers/theme'
import { createGlobalStyle } from 'styled-components'
import React from 'react'

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/js' element={<JavaScriptWeb />} />
        <Route path='/counter-app' element={<CounterApp />} />
      </Routes>
      <GlobalStyle />
    </StyledApp>
  )
}

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
