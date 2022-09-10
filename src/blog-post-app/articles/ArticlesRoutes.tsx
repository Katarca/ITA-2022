import { ArticleDetailContext } from '../article-detail/ArticleDetailContext'
import { Articles } from './Articles'
import { Div_Container } from '../../components/Container'
import { H_Heading } from '../../components/Heading'
import { NewArticleContext } from '../new-article/NewArticleContext'
import { P_LinkBodyText } from '../../components/BodyText'
import { Route, Routes } from 'react-router-dom'
import { RouterLink } from '../../components/RouterLink'
import { breakpoint, styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const ArticlesRoutes = () => {
  return (
    <Div_Container>
      <H_Heading>Blog Post App</H_Heading>
      <Nav_BlogNavbar>
        <RouterLink to={urls.blogApp}>
          <P_LinkBodyText>All Articles</P_LinkBodyText>
        </RouterLink>
        <RouterLink to={urls.linkNewArticle}>
          <P_LinkBodyText>New Article</P_LinkBodyText>
        </RouterLink>
      </Nav_BlogNavbar>
      <Routes>
        <Route path={urls.homePage} element={<Articles />} />
        <Route path={urls.newArticle} element={<NewArticleContext />} />
        <Route path={urls.articleDetailRoute} element={<ArticleDetailContext />} />
      </Routes>
    </Div_Container>
  )
}

const Nav_BlogNavbar = styled.nav`
  display: flex;
  width: 60%;
  justify-content: space-around;
  padding: ${styles.spacing.sm};
  border-bottom: ${styles.border.orange};
  text-align: center;
  margin-bottom: ${styles.spacing.sm};
  ${breakpoint.tabletPortrait} {
    width: 70%;
  }
  ${breakpoint.phone} {
    width: auto;
    flex-direction: column;
  }
`
