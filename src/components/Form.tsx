import { breakpoint, styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

export const Form = (props: ComponentProps<'form'>) => {
  return <form {...props}>{props.children}</form>
}

export const CustomForm = styled(Form)`
  display: flex;
  justify-content: center;
  padding: ${styles.spacing.sm};
  max-width: 100%;
`
