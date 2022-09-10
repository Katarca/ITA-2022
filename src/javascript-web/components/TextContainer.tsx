import { breakpoint } from '../../helpers/theme'
import styled from 'styled-components'

export const Div_TextContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  ${breakpoint.phone} {
    width: 100%;
  }
`
