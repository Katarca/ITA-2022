import { colors } from '../../helpers/theme'
import React, { Component } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  onClick: () => void
  children: string
}

export class Button extends Component<ButtonProps> {
  render() {
    return <StyledButton onClick={this.props.onClick}>{this.props.children}</StyledButton>
  }
}

const StyledButton = styled.button`
  background-color: ${colors.yellow300};
  border: 2px solid ${colors.white};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 2rem;
  color: ${colors.white};
  font-weight: 900;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.orange300};
    transform: scale(1.1);
  }
`
