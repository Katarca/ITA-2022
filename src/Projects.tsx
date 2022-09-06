import { Card } from './components/Card'
import { Link } from 'react-router-dom'
import { P_BodyText, P_LinkBodyText } from './components/BodyText'
import { RouterLink } from './components/RouterLink'
import { ReactComponent as githubLogo } from './images/github.svg'
import { styles } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import blogImg from './images/blog.png'
import blogPostImg from './images/blogpostapp.png'
import hackerTyperImg from './images/hackertyper.png'
import jsImg from './images/jsweb.png'
import memoryGameImg from './images/memorygame.png'
import styled from 'styled-components'
import todoImg from './images/todolist.png'

export const Projects = () => {
  return (
    <Div_ProjectsSection>
      <Card
        text='ToDo List'
        to={urls.todoList}
        src={todoImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/todo-list'
      />
      <Card
        text='ToDo List Redux'
        to={urls.todoListRedux}
        src={todoImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/todo-list-redux'
      />
      <Card
        text='JavaScript Web'
        to={urls.jsWeb}
        src={jsImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/javascript-web'
      />
      <Card
        text='Hacker Typer'
        to={urls.hackerTyper}
        src={hackerTyperImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/hacker-typer'
      />
      <Card
        text='Memory Game'
        to={urls.memoryGame}
        src={memoryGameImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/memory-game'
      />
      <Card
        text='Blog'
        to={urls.blog}
        src={blogImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/blog'
      />
      <Card
        text='Blog Post App'
        to={urls.blogApp}
        src={blogPostImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/blog-post-app'
      />
      <RouterLink to={urls.mortgageCalculator}>
        <P_LinkBodyText>Mortgage Calculator</P_LinkBodyText>
      </RouterLink>
    </Div_ProjectsSection>
  )
}

const Div_ProjectsSection = styled.div`
  padding: ${styles.spacing.md} 0;
`
