import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

export const Form = (props: ComponentProps<'form'>) => {
  return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
}

const StyledForm = styled.form`
  display: flex;
  padding: ${styles.spacing.sm};
`
