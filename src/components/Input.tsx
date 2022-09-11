import { smTextStyles, styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

export const Input = (props: ComponentProps<'input'>) => {
  return <input {...props} />
}

export const CustomInput = styled(Input)`
  ${smTextStyles}
  font-family: 'IBM Plex Mono', monospace;
  background: transparent;
  color: ${styles.colors.white};
  border: ${styles.border.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
`
