import { ArticleDetailStateContext } from './ArticleDetailContext'
import { CustomInput } from '../../components/Input'
import { CustomTextarea } from '../../components/Textarea'
import { Form } from '../../components/Form'
import { H_SubHeading } from '../../components/Heading'
import { MarkDown } from '../../components/MarkDown'
import { P_BlogText, P_BlogTextXs } from '../articles/Articles'
import { P_BodyText } from '../../components/BodyText'
import { TransparentButtonBorder } from '../../components/Button'
import { styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticleDetailJSX = () => {
  const articleData = useContext(ArticleDetailStateContext)
  let navigate = useNavigate()
  return (
    <>
      {articleData.editing ? (
        <Form
          onSubmit={e => {
            e.preventDefault()
            if (!articleData.validateInputs()) return
            articleData.updateArticle()
            articleData.setEditing(false)
            navigate(urls.blogApp)
          }}
        >
          <Div_InputContainer>
            <Label_EditLabel>Title</Label_EditLabel>
            <CustomInput
              type='text'
              value={articleData.newTitle}
              onChange={e => articleData.setNewTitle(e.target.value)}
            />
            {articleData.newTitleErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{articleData.newTitleErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_EditLabel>Author</Label_EditLabel>
            <CustomInput
              type='text'
              value={articleData.newAuthor}
              onChange={e => articleData.setNewAuthor(e.target.value)}
            />
            {articleData.newAuthorErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{articleData.newAuthorErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_EditLabel>Content</Label_EditLabel>
            <EditTextarea
              value={articleData.newContent}
              onChange={e => articleData.setNewContent(e.target.value)}
            />
            {articleData.newContentErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{articleData.newContentErr}</P_BlogTextXs>
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
          <H_ArticleHeading>{articleData.articleDetail.title}</H_ArticleHeading>
          <Div_DetailContainer>
            <P_BlogText>Author: {articleData.articleDetail.author}</P_BlogText>
            <P_BlogText>created at {articleData.articleDetail.date}</P_BlogText>
          </Div_DetailContainer>
          <Div_ContentContainer>
            <MarkDown>{articleData.articleDetail.content}</MarkDown>
          </Div_ContentContainer>
          <Div_ButtonContainer>
            <TransparentButtonBorder onClick={() => articleData.setEditing(true)}>
              <P_BodyText>Edit</P_BodyText>
            </TransparentButtonBorder>
            <TransparentButtonBorder
              onClick={() => {
                articleData.deleteArticle()
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
}

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
