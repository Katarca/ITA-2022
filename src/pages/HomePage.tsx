import { BodyText } from '../components/typo/BodyText'
import { RouterLink } from '../components/RouterLink/RouterLink'
import { StyledHome } from '../page-style/StyledApp'
import React from 'react'

export const HomePage = () => {
  return (
    <StyledHome>
      <RouterLink to='/js'>
        <BodyText>Homework1</BodyText>
      </RouterLink>
      <RouterLink to='/counter-app'>
        <BodyText>Homework2</BodyText>
      </RouterLink>
    </StyledHome>
  )
}
