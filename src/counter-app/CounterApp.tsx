import { BlueButton } from '../components/Button'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { Component } from 'react'
import styled from 'styled-components'

type Props = {}
type State = {
  counter: number
}

export class CounterApp extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <HelmetProvider>
        <CounterContainer>
          <Helmet>
            <title>Katarína Soušková | Counter App</title>
            <meta name='description' content='Simple counter app using react class components' />
          </Helmet>
          <H_Heading>{this.state.counter}</H_Heading>
          <ButtonContainer>
            <BlueButton
              onClick={() => {
                this.setState({
                  counter: this.state.counter + 1,
                })
              }}
            >
              <P_BodyText>+</P_BodyText>
            </BlueButton>
            <BlueButton
              onClick={() => {
                this.setState({
                  counter: this.state.counter - 1,
                })
              }}
            >
              <P_BodyText>-</P_BodyText>
            </BlueButton>
          </ButtonContainer>
          <RouterLink to={urls.homePage}>
            <P_LinkBodyText>Return home</P_LinkBodyText>
          </RouterLink>
        </CounterContainer>
      </HelmetProvider>
    )
  }
}

const CounterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${styles.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer = styled.div`
  display: flex;
`
