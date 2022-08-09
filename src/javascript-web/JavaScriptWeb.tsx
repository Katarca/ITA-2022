import { About } from './pages/About'
import { History } from './pages/History'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar'
import { Timeline } from './pages/Timeline'
import { Today } from './pages/Today'
import React from 'react'

export const JavaScriptWeb = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <History />
      <Timeline />
      <Today />
    </>
  )
}
