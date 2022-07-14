import { GlobalStyle } from '.'
import { Route, Routes } from 'react-router-dom'
import { StyledApp } from './page-style/StyledApp'
import JavaScriptWeb from './homework1/JavaScriptWeb'
import React from 'react'

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path='/js' element={<JavaScriptWeb />} />
      </Routes>
      <GlobalStyle />
    </StyledApp>
  )
}

export default App
