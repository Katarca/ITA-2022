import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

export const Button = (props: ComponentProps<'button'>) => {
  return (
    <StyledButton onClick={props.onClick} type={props.type}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: ${styles.colors.yellow300};
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  cursor: pointer;
  &:hover {
    background-color: ${styles.colors.orange300};
    transform: scale(1.1);
  }
`
