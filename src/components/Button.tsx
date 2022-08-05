import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>
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
