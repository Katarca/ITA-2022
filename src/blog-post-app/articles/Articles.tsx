import { ArticlesStateContext } from './ArticlesContext'
import { CustomInput } from '../../components/Input'
import { Form } from '../../components/Form'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MessageJSX } from '../../components/MessageJSX'
import { P_BodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { TransparentButtonBorder } from '../../components/Button'
import { blogAppUrl, urlString, urls } from '../../helpers/urls'
import { breakpoint, styles } from '../../helpers/theme'
import { getSlug } from '../../utils/getSlug'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const articlesLogic = useContext(ArticlesStateContext)

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const [searchTerm, setSearchTerm] = useState('')
  const [emptyInputError, setEmptyInputError] = useState(null as null | string)
  const [wasSubmitted, setWasSubmitted] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${blogAppUrl}`)
        if (!response.ok) throw Error
        const json = await response.json()
        articlesLogic.setArticles(json)
      } catch (error) {
        articlesLogic.setArticles([])
        setErrorMsg(`An error occurred while fetching articles`)
      }
      setLoading(false)
    }
    fetchArticles()
  }, [])

  const searchArticles = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${blogAppUrl}search/${searchTerm}`)
      const json = await response.json()
      articlesLogic.setSearchedArticles(json)
    } catch (error) {
      articlesLogic.setSearchedArticles([])
      setErrorMsg(`An error occurred while fetching articles`)
    }
    setLoading(false)
  }

  const articlesJSX = (
    <>
      {articlesLogic.searchedArticles.length > 0 ? (
        <div>
          {articlesLogic.searchedArticles.map(article => (
            <RouterLink
              to={urlString(
                urls.blogApp,
                urls.articleDetail,
                getSlug(article.title),
                '/',
                article.id
              )}
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
          <Div_ButtonContainer>
            <TransparentButtonBorder
              onClick={() => {
                articlesLogic.setSearchedArticles([])
                setWasSubmitted(false)
                setSearchTerm('')
              }}
            >
              <P_BodyText>Clear filter</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </div>
      ) : articlesLogic.searchedArticles.length === 0 && wasSubmitted ? (
        MessageJSX(
          'No result',
          <Div_ButtonContainer>
            <TransparentButtonBorder
              onClick={() => {
                articlesLogic.setSearchedArticles([])
                setWasSubmitted(false)
                setSearchTerm('')
              }}
            >
              <P_BodyText>Clear filter</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        )
      ) : (
        <>
          {articlesLogic?.articles.map(article => (
            <RouterLink
              to={urlString(
                urls.blogApp,
                urls.articleDetail,
                getSlug(article.title),
                '/',
                article.id
              )}
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
      )}
    </>
  )

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Articles </title>
      </Helmet>
      <Div_FormContainer>
        <Form
          onSubmit={e => {
            e.preventDefault()
            if (!searchTerm) {
              setEmptyInputError('Enter value')
              return
            }
            setWasSubmitted(true)
            searchArticles()
            setEmptyInputError(null)
          }}
        >
          <div>
            <CustomInput
              type='text'
              placeholder='search article'
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <TransparentButtonBorder type='submit'>
              <P_BodyText>Search</P_BodyText>
            </TransparentButtonBorder>
          </div>
          {emptyInputError && (
            <Div_MsgContainer>
              <P_BodyText>Please enter value</P_BodyText>
            </Div_MsgContainer>
          )}
        </Form>
      </Div_FormContainer>
      <Div_ArticlesContainer>
        {loading
          ? MessageJSX('Loading articles...')
          : errorMsg
          ? MessageJSX(errorMsg)
          : articlesJSX}
      </Div_ArticlesContainer>
    </HelmetProvider>
  )
}

const Div_ArticlesContainer = styled.div`
  padding: ${styles.spacing.sm};
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
const Div_FormContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`
const Div_ButtonContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`
