import { ArticlesContext } from './blog-post-app/articles/ArticlesContext'
import { BlogApp } from './blog/Blog'
import { CV } from './CV'
import { HackerTyper } from './hacker-typer/HackerTyper'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { HomePage } from './HomePage'
import { JavaScriptWeb } from './javascript-web/JavaScriptWeb'
import { MemoryGame } from './memory-game/MemoryGame'
import { MortgageCalculator } from './mortgage-calculator/MortgageCalculator'
import { Navbar } from './components/Navbar'
import { NotFound } from './404'
import { Projects } from './Projects'
import { Route, Routes } from 'react-router-dom'
import { TicTacToe } from './tic-tac-toe/TicTacToe'
import { ToDoAppRedux } from './todo-list-redux/ToDoAppRedux'
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
        </Helmet>
        <Navbar />
        <Routes>
          <Route path={urls.homePage} element={<HomePage />} />
          <Route path={urls.projects} element={<Projects />} />
          <Route path={urls.cv} element={<CV />} />
          <Route path={urls.jsWeb} element={<JavaScriptWeb />} />
          <Route path={urls.hackerTyper} element={<HackerTyper />} />
          <Route path={urls.memoryGame} element={<MemoryGame />} />
          <Route path={urls.mortgageCalculator} element={<MortgageCalculator />} />
          <Route path={urls.nestedBlog} element={<BlogApp />} />
          <Route path={urls.nestedBlogApp} element={<ArticlesContext />} />
          <Route path={urls.todoListRedux} element={<ToDoAppRedux />} />
          <Route path={urls.ticTacToe} element={<TicTacToe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </StyledApp>
    </HelmetProvider>
  )
}

const StyledApp = styled.div`
  min-height: 100vh;
`

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
