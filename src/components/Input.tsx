import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Input = (props: ComponentProps<'input'>) => {
  return <input {...props} />
}

export const CustomInput = styled(Input)`
  background: transparent;
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
`
