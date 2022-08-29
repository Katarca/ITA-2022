import { ArticlesStateContext } from './ArticlesContext'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterLink } from '../../components/RouterLink'
import { blogAppUrl, urlString, urls } from '../../helpers/urls'
import { breakpoint, styles } from '../../helpers/theme'
import { getSlug } from '../../utils/getSlug'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const articlesLogic = useContext(ArticlesStateContext)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${blogAppUrl}`)
        if (!response.ok) throw Error
        const json = await response.json()
        articlesLogic.setArticles(json)
      } catch (error) {
        console.error(error)
        setErrorMsg(`An error occurred while fetching articles`)
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

  const articlesJSX = (
    <>
      {articlesLogic?.articles.map(article => (
        <RouterLink
          to={urlString(urls.blogApp, urls.articleDetail, getSlug(article.title), '/', article.id)}
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
    </>
  )

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Articles </title>
      </Helmet>
      <Div_ArticlesContainer>
        {loading ? loadingJSX : errorMsg ? errorJSX : articlesJSX}
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
export const Div_MsgContainer = styled.div`
  margin: ${styles.spacing.xs};
  text-align: center;
`
