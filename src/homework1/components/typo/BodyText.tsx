import { colors } from '../../../helpers/consts'
import styled from 'styled-components'

export const NavText = styled.span`
  padding: 10px;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${colors.grey300};
  &:hover {
    color: ${colors.yellow300};
  }
`

export const BodyTextGrey = styled.p`
  font-size: 1.4rem;
  color: ${colors.grey300};
`
