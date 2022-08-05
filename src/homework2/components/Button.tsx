import { styles } from '../../helpers/theme'
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
  background-color: ${styles.colors.yellow300};
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
  font-weight: 900;
  margin: ${styles.spacing.xs};
  cursor: pointer;
  &:hover {
    background-color: ${styles.colors.orange300};
    transform: scale(1.1);
  }
`
