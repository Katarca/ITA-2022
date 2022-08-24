import { BlogStateContext } from './Blog'
import { H_Heading, H_SubHeading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MarkDown } from '../components/MarkDown'
import { P_BlogText } from './Articles'
import { P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const blogLogic = useContext(BlogStateContext)

  const articleDetail = blogLogic.articles.find(article => `${article.title}${article.id}` === slug)

  return articleDetail ? (
    <HelmetProvider>
      <Helmet>
        <title>{articleDetail.title}</title>
      </Helmet>
      <Div_ArticleContainer>
        <H_ArticleHeading>{articleDetail.title}</H_ArticleHeading>
        <Div_DetailContainer>
          <P_BlogText>Author: {articleDetail.author}</P_BlogText>
          <P_BlogText>created at {articleDetail.date}</P_BlogText>
        </Div_DetailContainer>
        <Div_ContentContainer>
          <MarkDown>{articleDetail.content}</MarkDown>
        </Div_ContentContainer>
      </Div_ArticleContainer>
    </HelmetProvider>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>404 page not found</title>
      </Helmet>
      <Div_ArticleContainer>
        <H_Heading>404</H_Heading>
        <H_SubHeading>page not found</H_SubHeading>
        <RouterLink to={urls.blog}>
          <P_LinkBodyText>Return to articles</P_LinkBodyText>
        </RouterLink>
      </Div_ArticleContainer>
    </HelmetProvider>
  )
}

const Div_ArticleContainer = styled.div`
  padding: ${styles.spacing.md};
  margin: ${styles.spacing.md};
  width: 80%;
  border: 1px solid ${styles.colors.grey300};
  border-radius: 8px;
  ${breakpoint.phone} {
    width: 100%;
    padding: ${styles.spacing.xs};
    margin: ${styles.spacing.xs};
  }
`
const H_ArticleHeading = styled(H_SubHeading)`
  color: ${styles.colors.grey300};
`

const Div_DetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: ${styles.spacing.sm} 0;
  border-bottom: 1px solid ${styles.colors.grey300};
`

const Div_ContentContainer = styled.div`
  padding: ${styles.spacing.md} ${styles.spacing.sm} ${styles.spacing.sm} ${styles.spacing.sm};
`
