import { HomeContainer, LogoContainer } from '../../Home/Styles/StyledHome'
import { colors } from '../../../../helpers/consts'
import styled from 'styled-components'

export const StyledImg = styled.img`
  ${HomeContainer} & {
    width: 40%;
    max-width: 350px;
  }
  ${LogoContainer} & {
    width: 35px;
    &:hover {
      transform: scale(1.2);
    }
  }
`
export const Svg = styled.svg`
  fill: ${colors.white};
  transform: rotate(-90deg);
`
