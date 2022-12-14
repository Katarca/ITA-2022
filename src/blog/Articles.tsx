import { BlogStateContext } from './Blog'
import { Helmet } from 'react-helmet-async'
import { P_BodyText, P_BodyTextXsGrey } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, hoverStyles, styles } from '../helpers/theme'
import { getArticleDetail } from '../helpers/urls'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const blogLogic = useContext(BlogStateContext)
  return (
    <>
      <Helmet>
        <title>Katarína Soušková | Articles </title>
      </Helmet>
      <Div_ArticlesContainer>
        {blogLogic?.articles.map(article => (
          <RouterLink to={getArticleDetail(article.title)} key={article.id}>
            <Div_ArticleBox>
              <P_BlogText>{article.title}</P_BlogText>
              <Div_TextContainer>
                <P_BodyTextXsGrey>by {article.author}</P_BodyTextXsGrey>
                <P_BodyTextXsGrey>{article.date}</P_BodyTextXsGrey>
              </Div_TextContainer>
            </Div_ArticleBox>
          </RouterLink>
        ))}
      </Div_ArticlesContainer>
    </>
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
  background-color: ${styles.colors.whiteTransparent};
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
export const P_BlogText = styled(P_BodyText)`
  ${breakpoint.tabletPortrait} {
    text-align: center;
  }
`

const Div_TextContainer = styled.div`
  text-align: right;
  padding: ${styles.spacing.xs} 0;
`
