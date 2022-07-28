import { colors } from '../../../helpers/consts'
import styled from 'styled-components'

export const BodyTextGrey = styled.p`
  font-size: 1.4rem;
  color: ${colors.grey300};
  &:not(:last-child) {
    padding-bottom: 30px;
  }
`

export const BodyTextWhite = styled.p`
  font-size: 1.4rem;
  color: ${colors.white};
  padding-bottom: 30px;
`

export const BodyTextBlack = styled.p`
  font-size: 1.4rem;
  color: ${colors.black};
  font-weight: 600;
  padding-bottom: 30px;
`

export const BodyTextDarkGrey = styled.p`
  font-size: 1.4rem;
  color: ${colors.grey900};
  &:not(:last-child) {
    padding-bottom: 30px;
  }
`

export const TextWhite = styled.p`
  font-size: 1.4rem;
  color: ${colors.white};
`
