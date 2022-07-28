import { breakpoint, space } from '../../helpers/theme'
import styled, { css } from 'styled-components'

export const Div_TextContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: ${space.medium};
  ${breakpoint.phone} {
    width: 80%;
  }
`
