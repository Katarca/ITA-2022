import { ArticlesJSX } from './ArticlesJSX'
import { ArticlesStateContext } from './ArticlesContext'
import { CustomInput } from '../../components/Input'
import { Form } from '../../components/Form'
import { Helmet } from 'react-helmet-async'
import { MessageJSX } from '../../components/MessageJSX'
import { P_BodyText } from '../../components/BodyText'
import { TransparentButtonBorder } from '../../components/Button'
import { breakpoint, smTextStyles, styles } from '../../helpers/theme'
import { githubUrl } from '../../helpers/urls'
import { services } from '../../utils/services'
import { useComponentDidMount } from '../../utils/useComponentDidMount'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const articlesLogic = useContext(ArticlesStateContext)

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null as null | string)
  const [emptyInputError, setEmptyInputError] = useState(null as null | string)

  useComponentDidMount(async () => {
    setLoading(true)
    try {
      const json = await services.getAllArticles()
      articlesLogic.setArticles(json)
    } catch (error) {
      articlesLogic.setArticles([])
      setErrorMsg(`Database is unavailable`)
    }
    setLoading(false)
  })

  const searchArticles = async () => {
    setLoading(true)
    try {
      const json = await services.getSearchedArticles(articlesLogic.searchTerm)
      articlesLogic.setSearchedArticles(json)
    } catch (error) {
      articlesLogic.setSearchedArticles([])
      setErrorMsg(`Database is unavailable`)
    }
    setLoading(false)
  }

  return (
    <>
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
          <Div_InputContainer>
            <CustomInput
              type='text'
              placeholder='search article'
              onChange={e => articlesLogic.setSearchTerm(e.target.value)}
              value={articlesLogic.searchTerm}
            />
            <TransparentButtonBorder type='submit' disabled={errorMsg ? true : false}>
              <P_BodyText>Search</P_BodyText>
            </TransparentButtonBorder>
          </Div_InputContainer>
          {emptyInputError && (
            <Div_MsgContainer>
              <P_BodyText>Please enter value</P_BodyText>
            </Div_MsgContainer>
          )}
        </Form>
      </Div_FormContainer>
      <Div_ArticlesContainer>
        {loading ? (
          <MessageJSX text='Loading articles...' />
        ) : errorMsg ? (
          <MessageJSX text={errorMsg}>
            <Div_MsgBox>
              <P_MsgText>
                To make the app work download repository from{' '}
                <A_Link href={githubUrl} target='_blank'>
                  github
                </A_Link>{' '}
                and run it on localhost
              </P_MsgText>
            </Div_MsgBox>
          </MessageJSX>
        ) : (
          <ArticlesJSX />
        )}
      </Div_ArticlesContainer>
    </>
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
export const P_BlogText = styled(P_BodyText)`
  color: ${styles.colors.grey300};
  ${breakpoint.tabletPortrait} {
    text-align: center;
  }
`
export const P_MsgText = styled(P_BodyText)`
  color: ${styles.colors.orange300};
`
export const Div_MsgContainer = styled.div`
  margin: ${styles.spacing.xs};
  text-align: center;
`
const Div_FormContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`
const A_Link = styled.a`
  ${smTextStyles}
  color: ${styles.colors.orangeTransparent};
  text-decoration: none;
`
const Div_InputContainer = styled.div`
  text-align: center;
`
const Div_MsgBox = styled.div`
  padding: ${styles.spacing.xs};
`
