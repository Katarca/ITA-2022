import { P_LinkBodyText } from './components/BodyText'
import { RouterLink } from './components/RouterLink'
import { styles } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Projects = () => {
  return (
    <Div_ProjectsSection>
      <RouterLink to={urls.jsWeb}>
        <P_LinkBodyText>Javascript Web</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.todoList}>
        <P_LinkBodyText>ToDo List</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.hackerTyper}>
        <P_LinkBodyText>Hacker Typer</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.memoryGame}>
        <P_LinkBodyText>Memory Game</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.mortgageCalculator}>
        <P_LinkBodyText>Mortgage Calculator</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.blog}>
        <P_LinkBodyText>Blog</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.blogApp}>
        <P_LinkBodyText>Blog Post App</P_LinkBodyText>
      </RouterLink>
      <RouterLink to={urls.todoListRedux}>
        <P_LinkBodyText>ToDo List Redux</P_LinkBodyText>
      </RouterLink>
    </Div_ProjectsSection>
  )
}

const Div_ProjectsSection = styled.div`
  padding: ${styles.spacing.md} 0;
`
