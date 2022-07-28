import { breakpoint } from '../../helpers/theme'
import styled, { css } from 'styled-components'

export const centralPart = css`
  width: 70%;
  margin: 0 auto;
  ${breakpoint.phone} {
    width: 80%;
  }
`
export const TextContainer = styled.div`
  padding-top: 50px;
  ${centralPart}
`
