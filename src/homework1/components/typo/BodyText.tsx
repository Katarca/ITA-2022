import { HomeContainer, HomeTextContainer } from '../Home/Styles/StyledHome'
import { colors } from '../../../helpers/consts'
import Section from '../Section/Section'
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

export const BodyTextWhite = styled.p`
  font-size: 1.4rem;
  color: ${colors.white};
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
