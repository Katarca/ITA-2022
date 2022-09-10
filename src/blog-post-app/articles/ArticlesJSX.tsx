import { ArticlesStateContext } from './ArticlesContext'
import { MessageJSX } from '../../components/MessageJSX'
import { P_BlogText } from './Articles'
import { P_BodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { TransparentButtonBorder } from '../../components/Button'
import { getArticleDetailUrl } from '../../helpers/urls'
import { hoverStyles, styles } from '../../helpers/theme'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticlesJSX = () => {
  const articlesLogic = useContext(ArticlesStateContext)
  return (
    <>
      {articlesLogic.searchedArticles.length > 0 ? (
        <div>
          {articlesLogic.searchedArticles.map(article => (
            <RouterLink to={getArticleDetailUrl(article.title, article.id)} key={article.id}>
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
                articlesLogic.setWasSubmitted(false)
                articlesLogic.setSearchTerm('')
              }}
            >
              <P_BodyText>Clear filter</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </div>
      ) : articlesLogic.searchedArticles.length === 0 && articlesLogic.wasSubmitted ? (
        <MessageJSX text='No result'>
          <Div_ButtonContainer>
            <TransparentButtonBorder
              onClick={() => {
                articlesLogic.setSearchedArticles([])
                articlesLogic.setWasSubmitted(false)
                articlesLogic.setSearchTerm('')
              }}
            >
              <P_BodyText>Clear filter</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </MessageJSX>
      ) : (
        <>
          {articlesLogic?.articles.map(article => (
            <RouterLink to={getArticleDetailUrl(article.title, article.id)} key={article.id}>
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
}

const Div_ArticleBox = styled.div`
  border: 2px solid ${styles.colors.grey300};
  border-radius: 8px;
  padding: ${styles.spacing.xs};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  ${hoverStyles}
  &:hover {
    border-color: ${styles.colors.orange300};
  }
`
const Div_TextContainer = styled.div`
  text-align: right;
  padding: ${styles.spacing.xs} 0;
`
const P_BlogTextXs = styled.p`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.grey300};
`
const Div_ButtonContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`
