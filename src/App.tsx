import { GlobalStyle } from '.'
import { Route, Routes } from 'react-router-dom'
import { StyledApp } from './page-style/StyledApp'
import Navbar from './homework1/components/Navbar/Navbar'
import React from 'react'

function App() {
  return (
    <StyledApp>
      <Navbar />
      <GlobalStyle />
    </StyledApp>
  )
}

export default App
