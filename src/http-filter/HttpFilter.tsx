import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const HttpFilter = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Http Filter</title>
      </Helmet>
      <Div_Container>
        <H_HFHeading>Http Filter</H_HFHeading>
        <RouterLink to={urls.homePage}>
          <P_LinkBodyText>Return home</P_LinkBodyText>
        </RouterLink>
      </Div_Container>
    </HelmetProvider>
  )
}

const H_HFHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.md};
`
