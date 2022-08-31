import { CustomInput } from '../../components/Input'
import { CustomTextarea } from '../../components/Textarea'
import { Form } from '../../components/Form'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MessageJSX } from '../../components/MessageJSX'
import { NewArticleStateContext } from './NewArticleContext'
import { P_BlogTextXs } from '../articles/Articles'
import { P_BodyText } from '../../components/BodyText'
import { TransparentButtonBorder } from '../../components/Button'
import { breakpoint, styles } from '../../helpers/theme'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const NewArticle = () => {
  const newArticle = useContext(NewArticleStateContext)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | New Article</title>
      </Helmet>
      <Div_NewArticleContainer>
        <BlogForm
          onSubmit={async e => {
            e.preventDefault()
            newArticle.submitArticle()
          }}
        >
          <Div_InputContainer>
            <Label_BlogLabel>Title</Label_BlogLabel>
            <BlogInput
              type='text'
              value={newArticle.title}
              onChange={e => newArticle.setTitle(e.target.value)}
              autoComplete='off'
            />
            {newArticle.titleErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{newArticle.titleErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_BlogLabel>Author</Label_BlogLabel>
            <BlogInput
              type='text'
              value={newArticle.author}
              onChange={e => newArticle.setAuthor(e.target.value)}
            />
            {newArticle.authorErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{newArticle.authorErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_BlogLabel>Content</Label_BlogLabel>
            <BlogTextArea
              value={newArticle.content}
              onChange={e => newArticle.setContent(e.target.value)}
            />
            {newArticle.contentErr && (
              <Div_ErrContainer>
                <P_BlogTextXs>{newArticle.contentErr}</P_BlogTextXs>
              </Div_ErrContainer>
            )}
          </Div_InputContainer>
          <Div_ButtonContainer>
            <TransparentButtonBorder type='submit'>
              <P_BodyText>Submit</P_BodyText>
            </TransparentButtonBorder>
          </Div_ButtonContainer>
        </BlogForm>
        {newArticle.newArticleErr && <MessageJSX text={newArticle.newArticleErr} />}
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
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  height: 400px;
`

const Label_BlogLabel = styled.label`
  font-size: ${styles.fontSize.sm};
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
