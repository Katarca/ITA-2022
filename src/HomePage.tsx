import { breakpoint, styles } from './helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <Div_HomeContainer>
      <P_IntroText>
        Welcome to my portfolio
        <br />
        My name is <Span_NameSpan>Katarína</Span_NameSpan>
        <br />I am a Software Developer
      </P_IntroText>
      <Div_PhotoPlaceholder />
    </Div_HomeContainer>
  )
}

const Div_HomeContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  margin: auto;
  padding: ${styles.spacing.md} 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${breakpoint.tabletLandscape} {
    flex-direction: column-reverse;
    padding: ${styles.spacing.sm} 0;
  }
`
const P_IntroText = styled.p`
  font-size: ${styles.fontSize.md};
  font-weight: bold;
  color: ${styles.colors.white};
  line-height: 1.5;
  ${breakpoint.tabletLandscape} {
    padding-top: ${styles.spacing.md};
    text-align: center;
  }
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.sm};
  }
`
const Span_NameSpan = styled.span`
  color: ${styles.colors.orange300};
`
const Div_PhotoPlaceholder = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: black;
  ${breakpoint.phone} {
    width: 300px;
    height: 300px;
  }
`
