import { BlogStateContext } from './Blog'
import { CustomInput } from '../components/Input'
import { CustomTextarea } from '../components/Textarea'
import { Form } from '../components/Form'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_BodyTextXsGrey } from '../components/BodyText'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, smTextStyles, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export const NewArticle = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  let navigate = useNavigate()

  const blogLogic = useContext(BlogStateContext)
  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | New Article</title>
      </Helmet>
      <Div_NewArticleContainer>
        <BlogForm
          onSubmit={e => {
            e.preventDefault()
            if (!blogLogic.validateInputs(title, author, content)) return
            blogLogic.addArticleData(title, author, content)
            setTitle('')
            setAuthor('')
            setContent('')
            navigate(urls.blog)
          }}
        >
          <Div_InputContainer>
            <Label_BlogLabel>Title</Label_BlogLabel>
            <BlogInput
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoComplete='off'
            />
            {blogLogic.titleErr && (
              <Div_ErrContainer>
                <P_BodyTextXsGrey>{blogLogic.titleErr}</P_BodyTextXsGrey>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_BlogLabel>Author</Label_BlogLabel>
            <BlogInput type='text' value={author} onChange={e => setAuthor(e.target.value)} />
            {blogLogic.authorErr && (
              <Div_ErrContainer>
                <P_BodyTextXsGrey>{blogLogic.authorErr}</P_BodyTextXsGrey>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_BlogLabel>Content</Label_BlogLabel>
            <BlogTextArea value={content} onChange={e => setContent(e.target.value)} />
            {blogLogic.contentErr && (
              <Div_ErrContainer>
                <P_BodyTextXsGrey>{blogLogic.contentErr}</P_BodyTextXsGrey>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_ButtonContainer>
            <TransparentButtonBorder type='submit'>
              <P_BodyText>Submit</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </BlogForm>
      </Div_NewArticleContainer>
    </HelmetProvider>
  )
}

const Div_NewArticleContainer = styled.div`
  padding: ${styles.spacing.md};
  width: 70%;
  ${breakpoint.tabletPortrait} {
    width: 90%;
  }
  ${breakpoint.phone} {
    width: 100%;
    padding: ${styles.spacing.xs};
  }
`

const BlogInput = styled(CustomInput)`
  border-color: ${styles.colors.orange300};
`
const BlogTextArea = styled(CustomTextarea)`
  ${smTextStyles}
  color: ${styles.colors.white};
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  height: 400px;
`

const Label_BlogLabel = styled.label`
  ${smTextStyles}
  color: ${styles.colors.grey300};
  padding: 0 ${styles.spacing.xs};
`

const BlogForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Div_InputContainer = styled.div`
  padding: 0 0 ${styles.spacing.sm} 0;
  display: flex;
  flex-direction: column;
`
const Div_ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Div_ErrContainer = styled.div`
  padding: 0 ${styles.spacing.xs};
`
