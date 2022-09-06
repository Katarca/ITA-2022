import { Card } from './components/Card'
import { P_LinkBodyText } from './components/BodyText'
import { RouterLink } from './components/RouterLink'
import { breakpoint, styles } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import blogImg from './images/blog.png'
import blogPostImg from './images/blogpostapp.png'
import hackerTyperImg from './images/hackertyper.png'
import jsImg from './images/jsweb.png'
import memoryGameImg from './images/memorygame.png'
import mortgageImg from './images/mortgagecalculator.png'
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
      <Card
        text='Mortgage Calculator'
        to={urls.mortgageCalculator}
        src={mortgageImg}
        githubUrl='https://github.com/Katarca/ITA-2022/tree/main/src/mortgage-calculator'
      />
    </Div_ProjectsSection>
  )
}

const Div_ProjectsSection = styled.div`
  padding: ${styles.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${styles.spacing.sm};
  ${breakpoint.phone} {
    padding: ${styles.spacing.sm};
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`
