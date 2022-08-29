import { ArticleDetailStateContext } from './ArticleDetailContext'
import { CustomInput } from '../../components/Input'
import { CustomTextarea } from '../../components/Textarea'
import { Div_MsgContainer, P_BlogText, P_BlogTextXs } from '../articles/Articles'
import { Form } from '../../components/Form'
import { H_SubHeading } from '../../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MarkDown } from '../../components/MarkDown'
import { P_BodyText, P_LinkBodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { TransparentButtonBorder } from '../../components/Button'
import { breakpoint, styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const articleDetailLogic = useContext(ArticleDetailStateContext)
  const [editing, setEditing] = useState(false)

  let navigate = useNavigate()

  const loadingJSX = (
    <Div_MsgContainer>
      <P_BlogText>Loading articles...</P_BlogText>
    </Div_MsgContainer>
  )

  const errorJSX = (
    <Div_MsgContainer>
      <P_BlogText>{articleDetailLogic.errorMsg}</P_BlogText>
      <RouterLink to={urls.blogApp}>
        <P_LinkBodyText>Return to articles</P_LinkBodyText>
      </RouterLink>
    </Div_MsgContainer>
  )

  const articleDetailJSX = (
    <>
      {editing ? (
        <Form
          onSubmit={e => {
            e.preventDefault()
            if (!articleDetailLogic.validateInputs()) return
            articleDetailLogic.postData()
            setEditing(false)
            navigate(urls.blogApp)
          }}
        >
          <Div_InputContainer>
            <Label_EditLabel>Title</Label_EditLabel>
            <CustomInput
              type='text'
              value={articleDetailLogic.newTitle}
              onChange={e => articleDetailLogic.setNewTitle(e.target.value)}
            />
            {articleDetailLogic.newTitleErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{articleDetailLogic.newTitleErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_EditLabel>Author</Label_EditLabel>
            <CustomInput
              type='text'
              value={articleDetailLogic.newAuthor}
              onChange={e => articleDetailLogic.setNewAuthor(e.target.value)}
            />
            {articleDetailLogic.newAuthorErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{articleDetailLogic.newAuthorErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_EditLabel>Content</Label_EditLabel>
            <EditTextarea
              value={articleDetailLogic.newContent}
              onChange={e => articleDetailLogic.setNewContent(e.target.value)}
            />
            {articleDetailLogic.newContentErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{articleDetailLogic.newContentErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_ButtonContainer>
            <TransparentButtonBorder type='submit'>
              <P_BodyText>Submit</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </Form>
      ) : (
        <>
          <H_ArticleHeading>{articleDetailLogic.articleDetail.title}</H_ArticleHeading>
          <Div_DetailContainer>
            <P_BlogText>Author: {articleDetailLogic.articleDetail.author}</P_BlogText>
            <P_BlogText>created at {articleDetailLogic.articleDetail.date}</P_BlogText>
          </Div_DetailContainer>
          <Div_ContentContainer>
            <MarkDown>{articleDetailLogic.articleDetail.content}</MarkDown>
          </Div_ContentContainer>
          <Div_ButtonContainer>
            <TransparentButtonBorder onClick={() => setEditing(true)}>
              <P_BodyText>Edit</P_BodyText>
            </TransparentButtonBorder>
            <TransparentButtonBorder
              onClick={() => {
                articleDetailLogic.deleteArticle()
                navigate(urls.blogApp)
              }}
            >
              <P_BodyText>Delete</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </>
      )}
    </>
  )

  return (
    <HelmetProvider>
      <Helmet>
        <title>{articleDetailLogic?.articleDetail.title}</title>
      </Helmet>
      <Div_ArticleContainer>
        {articleDetailLogic.loading
          ? loadingJSX
          : articleDetailLogic.errorMsg
          ? errorJSX
          : articleDetailJSX}
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

const Div_ButtonContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.sm} 0;
`
const Div_InputContainer = styled.div`
  padding: 0 0 ${styles.spacing.sm} 0;
  display: flex;
  flex-direction: column;
`

const Div_ErrContainer = styled.div`
  padding: 0 ${styles.spacing.xs};
`

const Label_EditLabel = styled.label`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
  padding: 0 ${styles.spacing.xs};
`

const EditTextarea = styled(CustomTextarea)`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  height: 400px;
  border-color: ${styles.colors.white};
`
