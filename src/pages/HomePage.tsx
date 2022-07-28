import { BodyText } from '../components/typo/BodyText'
import { RouterLink } from '../components/RouterLink'
import { StyledHome } from '../page-style/StyledApp'
import { urls } from '../helpers/urls'
import React from 'react'

export const HomePage = () => {
  return (
    <StyledHome>
      <RouterLink to={urls.jsWebUrl}>
        <BodyText>Homework1</BodyText>
      </RouterLink>
      <RouterLink to={urls.counterAppUrl}>
        <BodyText>Homework2</BodyText>
      </RouterLink>
    </StyledHome>
  )
}
