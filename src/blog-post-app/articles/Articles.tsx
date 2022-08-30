import { ArticlesJSX } from './ArticlesJSX'
import { ArticlesStateContext } from './ArticlesContext'
import { CustomInput } from '../../components/Input'
import { Form } from '../../components/Form'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MessageJSX } from '../../components/MessageJSX'
import { P_BodyText } from '../../components/BodyText'
import { TransparentButtonBorder } from '../../components/Button'
import { blogAppUrl } from '../../helpers/urls'
import { breakpoint, styles } from '../../helpers/theme'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const articlesLogic = useContext(ArticlesStateContext)

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [emptyInputError, setEmptyInputError] = useState(null as null | string)

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
      const response = await fetch(`${blogAppUrl}search/${articlesLogic.searchTerm}`)
      const json = await response.json()
      articlesLogic.setSearchedArticles(json)
    } catch (error) {
      articlesLogic.setSearchedArticles([])
      setErrorMsg(`An error occurred while fetching articles`)
    }
    setLoading(false)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Articles </title>
      </Helmet>
      <Div_FormContainer>
        <Form
          onSubmit={e => {
            e.preventDefault()
            if (!articlesLogic.searchTerm) {
              setEmptyInputError('Enter value')
              return
            }
            articlesLogic.setWasSubmitted(true)
            searchArticles()
            setEmptyInputError(null)
          }}
        >
          <div>
            <CustomInput
              type='text'
              placeholder='search article'
              onChange={e => articlesLogic.setSearchTerm(e.target.value)}
              value={articlesLogic.searchTerm}
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
        {loading ? (
          MessageJSX('Loading articles...')
        ) : errorMsg ? (
          MessageJSX(errorMsg)
        ) : (
          <ArticlesJSX />
        )}
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
export const Div_MsgContainer = styled.div`
  margin: ${styles.spacing.xs};
  text-align: center;
`
const Div_FormContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`
