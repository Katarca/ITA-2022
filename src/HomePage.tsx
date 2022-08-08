import { P_LinkBodyText } from './components/BodyText'
import { RouterLink } from './components/RouterLink'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <StyledHomePage>
      <RouterLink to={urls.jsWeb}>
        <P_LinkBodyText>Javascript Web</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.counterApp}>
        <P_LinkBodyText>Counter App</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.todoList}>
        <P_LinkBodyText>ToDo List</P_LinkBodyText>
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
