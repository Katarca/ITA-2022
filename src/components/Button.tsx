import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}

export const BlueButton = styled(Button)`
  background-color: ${styles.colors.blue900};
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

export const TransparentButtonBorder = styled(Button)`
  background: transparent;
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  cursor: pointer;
  &:hover {
    background-color: ${styles.colors.orange300};
    transform: scale(1.1);
  }
  &[aria-pressed='true'] {
    border: 2px solid ${styles.colors.orange300};
  }
`

export const TransparentButton = styled(Button)`
  background: transparent;
  margin: 0 ${styles.spacing.xs};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
