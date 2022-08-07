import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Form = (props: ComponentProps<'form'>) => {
  return <form {...props}>{props.children}</form>
}

export const CustomForm = styled(Form)`
  display: flex;
  padding: ${styles.spacing.sm};
`
