import { BlogStateContext } from './Blog'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { getSlug } from '../utils/getSlug'
import { urlString, urls } from '../helpers/urls'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const blogLogic = useContext(BlogStateContext)
  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Articles </title>
      </Helmet>
      <Div_ArticlesContainer>
        {blogLogic?.articles.map(article => (
          <RouterLink
            to={urlString(urls.blog, urls.articleDetail, getSlug(article.title))}
            key={article.id}
          >
            <Div_ArticleBox>
              <P_BlogText>{article.title}</P_BlogText>
              <Div_TextContainer>
                <P_BlogTextXs>by {article.author}</P_BlogTextXs>
                <P_BlogTextXs>{article.date}</P_BlogTextXs>
              </Div_TextContainer>
            </Div_ArticleBox>
          </RouterLink>
        ))}
      </Div_ArticlesContainer>
    </HelmetProvider>
  )
}

const Div_ArticlesContainer = styled.div`
  padding: ${styles.spacing.md};
  width: 80%;
  ${breakpoint.phone} {
    width: 100%;
    padding: ${styles.spacing.xs};
  }
`
const Div_ArticleBox = styled.div`
  border: 2px solid ${styles.colors.grey300};
  border-radius: 8px;
  padding: ${styles.spacing.xs};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
export const P_BlogText = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
  ${breakpoint.tabletPortrait} {
    text-align: center;
  }
`
export const P_BlogTextXs = styled.p`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.grey300};
`
const Div_TextContainer = styled.div`
  text-align: right;
  padding: ${styles.spacing.xs} 0;
`