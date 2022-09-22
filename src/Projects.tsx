import { Card } from './components/Card'
import { Helmet } from 'react-helmet-async'
import { breakpoint, styles } from './helpers/theme'
import { githubUrl, urls } from './helpers/urls'
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
    <>
      <Helmet>
        <title>Katarína Soušková | Projects</title>
      </Helmet>
      <Div_ProjectsSection>
        <Card
          text='ToDo List'
          to={urls.todoListRedux}
          src={todoImg}
          githubUrl={`${githubUrl}todo-list-redux`}
          redux={true}
        />
        <Card
          text='JavaScript Web'
          to={urls.jsWeb}
          src={jsImg}
          githubUrl={`${githubUrl}javascript-web`}
        />
        <Card
          text='Hacker Typer'
          to={urls.hackerTyper}
          src={hackerTyperImg}
          githubUrl={`${githubUrl}hacker-typer`}
        />
        <Card
          text='Memory Game'
          to={urls.memoryGame}
          src={memoryGameImg}
          githubUrl={`${githubUrl}memory-game`}
        />
        <Card text='Blog' to={urls.blog} src={blogImg} githubUrl={`${githubUrl}blog`} />
        <Card
          text='Blog Post App'
          to={urls.blogApp}
          src={blogPostImg}
          githubUrl={`${githubUrl}blog-post-app`}
          node={true}
        />
        <Card
          text='Mortgage Calculator'
          to={urls.mortgageCalculator}
          src={mortgageImg}
          githubUrl={`${githubUrl}mortgage-calculator`}
        />
      </Div_ProjectsSection>
    </>
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
