import { breakpoint, hoverStyles, styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}

export const TransparentButtonBorder = styled(Button)`
  background: transparent;
  border: ${styles.border.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  width: fit-content;
  cursor: pointer;
  ${hoverStyles}
  &:hover {
    background-color: ${styles.colors.orange300};
  }
  &:disabled {
    background-color: ${styles.colors.grey500};
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: unset;
      box-shadow: unset;
    }
  }
  &[aria-pressed='true'] {
    border: ${styles.border.orange};
  }
  ${breakpoint.phone} {
    width: 80%;
  }
`

export const TransparentButton = styled(Button)`
  background: transparent;
  margin: 0 ${styles.spacing.xs};
  cursor: pointer;
  border: none;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
`
