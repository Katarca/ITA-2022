import About from './components/About/About'
import History from './components/History/History'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import Timeline from './components/TimeLine/Timeline'
import Today from './components/Today/Today'

const JavaScriptWeb = () => {
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

export default JavaScriptWeb
