import { BodyText } from '../components/typo/BodyText'
import { StyledHome } from '../page-style/StyledApp'
import Link from '../components/Link/Link'
import React from 'react'

const Home = () => {
  return (
    <StyledHome>
      <Link to='/js'>
        <BodyText>Homework1</BodyText>
      </Link>
    </StyledHome>
  )
}

export default Home
