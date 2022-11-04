import { ArticleDetailJSX } from './ArticleDetailJSX'
import { ArticleDetailStateContext } from './ArticleDetailContext'
import { Helmet } from 'react-helmet-async'
import { MessageJSX } from '../../components/MessageJSX'
import { P_LinkBodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { breakpoint, styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const articleData = useContext(ArticleDetailStateContext)

  return (
    <>
      <Helmet>
        <title>{articleData?.articleDetail.title}</title>
      </Helmet>
      <Div_ArticleContainer>
        {articleData.loading ? (
          <MessageJSX text='Loading article detail...' />
        ) : articleData.errorMsg ? (
          <MessageJSX text={articleData.errorMsg}>
            <RouterLink to={urls.blogApp}>
              <P_LinkBodyText>Return to articles</P_LinkBodyText>
            </RouterLink>
          </MessageJSX>
        ) : (
          <ArticleDetailJSX />
        )}
      </Div_ArticleContainer>
    </>
  )
}

const Div_ArticleContainer = styled.div`
  padding: ${styles.spacing.md};
  margin: ${styles.spacing.md};
  width: 80%;
  background-color: ${styles.colors.whiteTransparent};
  border-radius: 8px;
  ${breakpoint.phone} {
    width: 100%;
    padding: ${styles.spacing.xs};
    margin: ${styles.spacing.xs};
  }
`
