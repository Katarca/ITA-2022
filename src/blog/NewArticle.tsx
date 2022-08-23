import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
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
        <P_BodyText>New Article</P_BodyText>
      </Div_NewArticleContainer>
    </HelmetProvider>
  )
}

const Div_NewArticleContainer = styled.div`
  padding: ${styles.spacing.md};
`
