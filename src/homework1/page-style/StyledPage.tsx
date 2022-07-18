import { Link } from 'react-scroll'
import { breakpoint, colors } from '../../helpers/consts'
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
export const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${colors.grey300};
  &:hover {
    color: ${colors.yellow300};
  }
  &.active {
    color: ${colors.orange300};
  }
`
