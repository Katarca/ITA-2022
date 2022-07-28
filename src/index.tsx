import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { colors } from './helpers/consts'
import { createGlobalStyle } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom/client'

export const GlobalStyle = createGlobalStyle`
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
