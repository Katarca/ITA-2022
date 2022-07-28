import { P_BodyText } from './components/BodyText'
import { RouterLink } from './components/RouterLink'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <StyledHomePage>
      <RouterLink to={urls.jsWebUrl}>
        <P_BodyText>Homework1</P_BodyText>
      </RouterLink>
      <RouterLink to={urls.counterAppUrl}>
        <P_BodyText>Homework2</P_BodyText>
      </RouterLink>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
