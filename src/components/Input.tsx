import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

export const Input = (props: ComponentProps<'input'>) => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

const StyledInput = styled.input`
  background: transparent;
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  margin: ${styles.spacing.xs};
`
