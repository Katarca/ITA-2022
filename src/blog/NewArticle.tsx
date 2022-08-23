import { CustomInput } from '../components/Input'
import { CustomTextarea } from '../components/Textarea'
import { Form } from '../components/Form'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { TransparentButtonBorder } from '../components/Button'
import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const NewArticle = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Blog | New Article</title>
      </Helmet>
      <Div_NewArticleContainer>
        <BlogForm>
          <Div_InputContainer>
            <Label_BlogLabel>Title</Label_BlogLabel>
            <BlogInput />
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_BlogLabel>Author</Label_BlogLabel>
            <BlogInput />
          </Div_InputContainer>
          <Div_InputContainer>
            <Label_BlogLabel>Content</Label_BlogLabel>
            <BlogTextArea />
          </Div_InputContainer>
          <TransparentButtonBorder type='submit'>
            <P_BodyText>Submit</P_BodyText>
          </TransparentButtonBorder>
        </BlogForm>
      </Div_NewArticleContainer>
    </HelmetProvider>
  )
}

const Div_NewArticleContainer = styled.div`
  padding: ${styles.spacing.md};
  width: 70%;
`

const BlogInput = styled(CustomInput)`
  border-color: ${styles.colors.orange300};
`
const BlogTextArea = styled(CustomTextarea)`
  font-size: ${styles.fontSize.sm};
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  height: 400px;
`

const Label_BlogLabel = styled.label`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
`

const BlogForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Div_InputContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
  display: flex;
  flex-direction: column;
`
