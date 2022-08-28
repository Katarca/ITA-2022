import { ArticleDetailStateContext } from './ArticleDetailContext'
import { H_Heading, H_SubHeading } from '../../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MarkDown } from '../../components/MarkDown'
import { P_LinkBodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { blogAppUrl, urls } from '../../helpers/urls'
import { breakpoint, styles } from '../../helpers/theme'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()

  const articleDetailLogic = useContext(ArticleDetailStateContext)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${blogAppUrl}${id}`)
        if (!response.ok) throw Error
        const json = await response.json()
        articleDetailLogic.setArticleDetail(json)
      } catch (error) {
        console.error(error)
        setErrorMsg(`An error occurred while fetching article`)
      }
      setLoading(false)
    }
    fetchArticles()
  }, [])

  const loadingJSX = (
    <Div_MsgContainer>
      <P_BlogText>Loading articles...</P_BlogText>
    </Div_MsgContainer>
  )

  const errorJSX = (
    <Div_MsgContainer>
      <P_BlogText>{errorMsg}</P_BlogText>
    </Div_MsgContainer>
  )

  const articleDetailJSX = (
    <>
      <H_ArticleHeading>{articleDetailLogic.articleDetail.title}</H_ArticleHeading>
      <Div_DetailContainer>
        <P_BlogText>Author: {articleDetailLogic.articleDetail.author}</P_BlogText>
        <P_BlogText>created at {articleDetailLogic.articleDetail.date}</P_BlogText>
      </Div_DetailContainer>
      <Div_ContentContainer>
        <MarkDown>{articleDetailLogic.articleDetail.content}</MarkDown>
      </Div_ContentContainer>
    </>
  )

  return articleDetailLogic.articleDetail ? (
    <HelmetProvider>
      <Helmet>
        <title>{articleDetailLogic.articleDetail.title}</title>
      </Helmet>
      <Div_ArticleContainer>
        {loading ? loadingJSX : errorMsg ? errorJSX : articleDetailJSX}
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
        <RouterLink to={urls.blogApp}>
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
export const P_BlogText = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
  ${breakpoint.tabletPortrait} {
    text-align: center;
  }
`
const Div_MsgContainer = styled.div`
  margin: ${styles.spacing.xs};
`
