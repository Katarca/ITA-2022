import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Textarea = (props: ComponentProps<'textarea'>) => {
  return <textarea {...props} />
}

export const CustomTextarea = styled(Textarea)`
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 2px solid ${styles.colors.orange300};
  border-radius: 8px;
  background: transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`
