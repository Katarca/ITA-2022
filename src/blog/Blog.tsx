import { ArticleDetail } from './ArticleDetail'
import { Articles } from './Articles'
import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { NewArticle } from './NewArticle'
import { P_LinkBodyText } from '../components/BodyText'
import { Route, Routes } from 'react-router-dom'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { urls } from '../helpers/urls'
import { useLocalStorage } from '../utils/useLocalStorage'
import React from 'react'
import styled from 'styled-components'

type Article = {
  id: string
  date: string
  author: string
  title: string
  content: string
}

const useLogicState = () => {
  const [articles, setArticles] = useLocalStorage('BlogArticlesLs', [] as Article[])
  return {
    articles,
    setArticles,
  }
}

export const { ContextProvider: BlogContextProvider, Context: BlogStateContext } =
  genericHookContextBuilder(useLogicState)

export const BlogApp = () => {
  return (
    <BlogContextProvider>
      <Div_Container>
        <H_BlogHeading>Blog</H_BlogHeading>
        <Nav_BlogNavbar>
          <RouterLink to={urls.blog}>
            <P_LinkBodyText>Articles</P_LinkBodyText>
          </RouterLink>
          <RouterLink to={`${urls.blog}${urls.newArticle}`}>
            <P_LinkBodyText>New Article</P_LinkBodyText>
          </RouterLink>
        </Nav_BlogNavbar>
        <Routes>
          <Route path={urls.homePage} element={<Articles />} />
          <Route path={urls.newArticle} element={<NewArticle />} />
          <Route path={`${urls.articleDetail}${urls.slug}`} element={<ArticleDetail />} />
        </Routes>
        <RouterLink to={urls.homePage}>
          <P_LinkBodyText>Return home</P_LinkBodyText>
        </RouterLink>
      </Div_Container>
    </BlogContextProvider>
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
