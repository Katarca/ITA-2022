import { About } from './components/About'
import { History } from './components/History'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Timeline } from './components/Timeline'
import { Today } from './components/Today'
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
