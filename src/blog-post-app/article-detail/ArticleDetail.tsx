import { ArticleDetailJSX } from './ArticleDetailJSX'
import { ArticleDetailStateContext } from './ArticleDetailContext'
import { CustomInput } from '../../components/Input'
import { CustomTextarea } from '../../components/Textarea'
import { Div_MsgContainer, P_BlogText, P_BlogTextXs } from '../articles/Articles'
import { Form } from '../../components/Form'
import { H_SubHeading } from '../../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MarkDown } from '../../components/MarkDown'
import { MessageJSX } from '../../components/MessageJSX'
import { P_BodyText, P_LinkBodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { TransparentButtonBorder } from '../../components/Button'
import { breakpoint, styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const articleData = useContext(ArticleDetailStateContext)

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  )
}

const Div_ArticleContainer = styled.div`
  padding: ${styles.spacing.md};
  margin: ${styles.spacing.md};
  width: 80%;
  border: ${styles.border.grey300};
  border-radius: 8px;
  ${breakpoint.phone} {
    width: 100%;
    padding: ${styles.spacing.xs};
    margin: ${styles.spacing.xs};
  }
`
