import { CounterApp } from './counter-app/CounterApp'
import { HackerTyper } from './hacker-typer/HackerTyper'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { HomePage } from './HomePage'
import { JavaScriptWeb } from './javascript-web/JavaScriptWeb'
import { MemoryGame } from './memory-game/MemoryGame'
import { Route, Routes } from 'react-router-dom'
import { ToDoApp } from './todo-list/ToDoList'
import { createGlobalStyle } from 'styled-components'
import { styles } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <HelmetProvider>
      <StyledApp>
        <Helmet>
          <title>Katarína Soušková</title>
          <meta
            name='description'
            content='Portfolio of react front-end developer Katarína Soušková'
          />
        </Helmet>
        <Routes>
          <Route path={urls.homePage} element={<HomePage />} />
          <Route path={urls.jsWeb} element={<JavaScriptWeb />} />
          <Route path={urls.counterApp} element={<CounterApp />} />
          <Route path={urls.todoList} element={<ToDoApp />} />
          <Route path={urls.hackerTyper} element={<HackerTyper />} />
          <Route path={urls.memoryGame} element={<MemoryGame />} />
        </Routes>
        <GlobalStyle />
      </StyledApp>
    </HelmetProvider>
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
    background-color: ${styles.colors.blue900};
    font-family: 'IBM Plex Mono', monospace;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
    body::-webkit-scrollbar {
    display: none;
  }

`
