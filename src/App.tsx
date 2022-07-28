import { CounterApp } from './homework2/CounterApp'
import { GlobalStyle } from '.'
import { HomePage } from './pages/HomePage'
import { JavaScriptWeb } from './homework1/JavaScriptWeb'
import { Route, Routes } from 'react-router-dom'
import { StyledApp } from './page-style/StyledApp'
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
