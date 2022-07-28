import { colors, fontSize, space } from '../../helpers/theme'
import styled from 'styled-components'

export const P_BodyTextGrey = styled.p`
  font-size: ${fontSize.small};
  color: ${colors.grey300};
  &:not(:last-child) {
    padding-bottom: ${space.small};
  }
`

export const P_BodyTextWhite = styled.p`
  font-size: ${fontSize.small};
  color: ${colors.white};
  padding-bottom: ${space.small};
`

export const P_BodyTextBlack = styled.p`
  font-size: ${fontSize.small};
  color: ${colors.black};
  font-weight: 600;
  padding-bottom: ${space.small};
`

export const P_BodyTextDarkGrey = styled.p`
  font-size: ${fontSize.small};
  color: ${colors.grey900};
  &:not(:last-child) {
    padding-bottom: ${space.small};
  }
`
