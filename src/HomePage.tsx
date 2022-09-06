import { breakpoint, styles } from './helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Div_IntroContainer>
        <P_IntroText>
          Welcome to my portfolio
          <br />
          My name is <Span_NameSpan>Katarína</Span_NameSpan>
          <br />I am a Software Developer
        </P_IntroText>
        <Div_PhotoPlaceholder />
      </Div_IntroContainer>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${styles.spacing.md};
`

const Div_IntroContainer = styled.div`
  width: 80vw;
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
