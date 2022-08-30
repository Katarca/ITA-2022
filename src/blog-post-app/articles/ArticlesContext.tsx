import { ArticleDetailContext } from '../article-detail/ArticleDetailContext'
import { Articles } from './Articles'
import { Div_Container } from '../../components/Container'
import { H_Heading } from '../../components/Heading'
import { NewArticleContext } from '../new-article/NewArticleContext'
import { P_LinkBodyText } from '../../components/BodyText'
import { Route, Routes } from 'react-router-dom'
import { RouterLink } from '../../components/RouterLink'
import { breakpoint, styles } from '../../helpers/theme'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { urlString, urls } from '../../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

export type Article = {
  id: string
  date: string
  author: string
  title: string
  content: string
}

const useLogicState = () => {
  const [articles, setArticles] = useState([] as Article[])
  const [searchedArticles, setSearchedArticles] = useState([] as Article[])
  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  return {
    articles,
    setArticles,
    searchedArticles,
    setSearchedArticles,
    wasSubmitted,
    setWasSubmitted,
    searchTerm,
    setSearchTerm,
  }
}

export const { ContextProvider: ArticlesContextProvider, Context: ArticlesStateContext } =
  genericHookContextBuilder(useLogicState)

export const ArticlesContext = () => {
  return (
    <ArticlesContextProvider>
      <Div_Container>
        <H_BlogHeading>Blog Post App</H_BlogHeading>
        <Nav_BlogNavbar>
          <RouterLink to={urls.blogApp}>
            <P_LinkBodyText>All Articles</P_LinkBodyText>
          </RouterLink>
          <RouterLink to={urlString(urls.blogApp, urls.newArticle)}>
            <P_LinkBodyText>New Article</P_LinkBodyText>
          </RouterLink>
        </Nav_BlogNavbar>
        <Routes>
          <Route path={urls.homePage} element={<Articles />} />
          <Route path={urls.newArticle} element={<NewArticleContext />} />
          <Route
            path={urlString(urls.articleDetail, urls.slug, urls.id)}
            element={<ArticleDetailContext />}
          />
        </Routes>
        <RouterLink to={urls.homePage}>
          <P_LinkBodyText>Return home</P_LinkBodyText>
        </RouterLink>
      </Div_Container>
    </ArticlesContextProvider>
  )
}

const H_BlogHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.lg};
`
const Nav_BlogNavbar = styled.nav`
  display: flex;
  width: 60%;
  justify-content: space-around;
  padding: ${styles.spacing.sm};
  border-bottom: 2px solid ${styles.colors.orange300};
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
