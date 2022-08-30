import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const MessageJSX = (text: string, routerLink?: React.ReactNode) => (
  <Div_MessageContainer>
    <P_MessageText>{text}</P_MessageText>
    {routerLink}
  </Div_MessageContainer>
)

const Div_MessageContainer = styled.div`
  margin: ${styles.spacing.xs};
  text-align: center;
`

const P_MessageText = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
`
