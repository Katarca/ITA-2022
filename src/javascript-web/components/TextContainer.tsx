import { breakpoint, styles } from '../../helpers/theme'
import styled, { css } from 'styled-components'

export const Div_TextContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: ${styles.spacing.md};
  ${breakpoint.phone} {
    width: 80%;
  }
`
