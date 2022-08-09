import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const HackerTyper = () => {
  return (
    <Div_Container>
      <H_HackHeading>Hacker Typer</H_HackHeading>
      <TA_TextArea />
      <RouterLink to={urls.homePage}>
        <P_LinkBodyText>Return home</P_LinkBodyText>
      </RouterLink>
    </Div_Container>
  )
}

const H_HackHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.md};
`
const TA_TextArea = styled.textarea`
  width: 100%;
  height: 65vh;
  border: 2px solid ${styles.colors.orange300};
  border-radius: 8px;
  background: transparent;
`
