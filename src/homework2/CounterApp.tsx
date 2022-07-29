import { Button } from './components/Button'
import { H_Heading } from './components/Heading'
import { colors } from '../helpers/theme'
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
      <CounterContainer>
        <H_Heading>{this.state.counter}</H_Heading>
        <ButtonContainer>
          <Button
            onClick={() => {
              this.setState({
                counter: this.state.counter + 1,
              })
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              this.setState({
                counter: this.state.counter - 1,
              })
            }}
          >
            -
          </Button>
        </ButtonContainer>
      </CounterContainer>
    )
  }
}

const CounterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer = styled.div`
  display: flex;
`
