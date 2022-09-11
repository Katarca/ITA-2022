import { P_BodyTextGrey } from './BodyText'
import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type MessageJSX = {
  text: string
  children?: React.ReactNode
}

export const MessageJSX = (props: MessageJSX) => (
  <Div_MessageContainer>
    <P_BodyTextGrey>{props.text}</P_BodyTextGrey>
    {props.children}
  </Div_MessageContainer>
)

const Div_MessageContainer = styled.div`
  margin: ${styles.spacing.xs};
  text-align: center;
`
