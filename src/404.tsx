import { Div_Container } from './components/Container'
import { H_Heading } from './components/Heading'
import { P_BodyText } from './components/BodyText'
import { RouterLink } from './components/RouterLink'
import { TransparentButtonBorder } from './components/Button'
import { breakpoint, styles } from './helpers/theme'
import { ReactComponent as ghostImg } from './images/ghost.svg'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const NotFound = () => {
  return (
    <Div_Container>
      <H_NotFoundHeading>404</H_NotFoundHeading>
      <P_NotFoundText>Oops! Nothing found here</P_NotFoundText>
      <RouterLink to={urls.homePage}>
        <NotFoundButton>
          <P_BodyText>Go home</P_BodyText>
        </NotFoundButton>
      </RouterLink>
      <Icon_GhostIcon />
    </Div_Container>
  )
}

const H_NotFoundHeading = styled(H_Heading)`
  color: ${styles.colors.white};
  font-size: ${styles.fontSize.xxl};
`
const Icon_GhostIcon = styled(ghostImg)`
  width: 100px;
  fill: ${styles.colors.white};
  padding-top: ${styles.spacing.sm};
`
const P_NotFoundText = styled(P_BodyText)`
  padding-bottom: ${styles.spacing.sm};
`
const NotFoundButton = styled(TransparentButtonBorder)`
  ${breakpoint.phone} {
    width: fit-content;
  }
`
