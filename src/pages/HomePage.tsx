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
    </StyledHome>
  )
}
