import { CounterApp } from './counter-app/CounterApp'
import { HackerTyper } from './hacker-typer/HackerTyper'
import { HomePage } from './HomePage'
import { JavaScriptWeb } from './javascript-web/JavaScriptWeb'
import { Route, Routes } from 'react-router-dom'
import { ToDoList } from './todo-list/ToDoList'
import { createGlobalStyle } from 'styled-components'
import { styles } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path={urls.homePage} element={<HomePage />} />
        <Route path={urls.jsWeb} element={<JavaScriptWeb />} />
        <Route path={urls.counterApp} element={<CounterApp />} />
        <Route path={urls.todoList} element={<ToDoList />} />
        <Route path={urls.hackerTyper} element={<HackerTyper />} />
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
    background-color: ${styles.colors.blue900};
    font-family: 'IBM Plex Mono', monospace;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
    body::-webkit-scrollbar {
    display: none;
  }

`
