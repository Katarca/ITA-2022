import { About } from './pages/About'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { History } from './pages/History'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar'
import { Timeline } from './pages/Timeline'
import { Today } from './pages/Today'
import { metaData } from '../helpers/metaData'
import React from 'react'

export const JavaScriptWeb = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{metaData.title.jsWeb}</title>
          <meta name='description' content={metaData.description.jsWeb} />
        </Helmet>
        <Navbar />
        <Home />
        <About />
        <History />
        <Timeline />
        <Today />
      </HelmetProvider>
    </>
  )
}
