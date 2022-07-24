import { BodyText } from '../components/typo/BodyText'
import { StyledHome } from '../page-style/StyledApp'
import React from 'react'
import RouterLink from '../components/RouterLink/RouterLink'

const Home = () => {
  return (
    <StyledHome>
      <RouterLink to='/js'>
        <BodyText>Homework1</BodyText>
      </RouterLink>
    </StyledHome>
  )
}

export default Home
