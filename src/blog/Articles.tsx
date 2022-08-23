import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const Articles = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Blog | Articles</title>
      </Helmet>
      <Div_ArticlesContainer>
        <P_BodyText>Articles</P_BodyText>
      </Div_ArticlesContainer>
    </HelmetProvider>
  )
}

const Div_ArticlesContainer = styled.div`
  padding: ${styles.spacing.md};
`
