import { breakpoint, styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}

export const TransparentButtonBorder = styled(Button)`
  background: transparent;
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
  cursor: pointer;
  width: fit-content;
  transition: 0.1s;
  &:hover {
    background-color: ${styles.colors.orange300};
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &[aria-pressed='true'] {
    border: 2px solid ${styles.colors.orange300};
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
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
