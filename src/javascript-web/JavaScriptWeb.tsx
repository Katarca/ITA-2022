import { About } from './pages/About'
import { Helmet } from 'react-helmet-async'
import { History } from './pages/History'
import { Home } from './pages/Home/Home'
import { Timeline } from './pages/Timeline'
import { Today } from './pages/Today'
import React from 'react'

export const JavaScriptWeb = () => {
  return (
    <>
      <Helmet>
        <title>Katarína Soušková | JS Web</title>
      </Helmet>
      <Home />
      <About />
      <History />
      <Timeline />
      <Today />
    </>
  )
}
