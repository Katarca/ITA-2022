import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type MessageJSX = {
  text: string
  children?: React.ReactNode
}

export const MessageJSX = (props: MessageJSX) => (
  <Div_MessageContainer>
    <P_MessageText>{props.text}</P_MessageText>
    {props.children}
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
