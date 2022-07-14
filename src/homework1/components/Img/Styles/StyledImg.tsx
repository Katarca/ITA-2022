import { HomeContainer, LogoContainer } from '../../Home/Styles/StyledHome'
import styled from 'styled-components'

export const StyledImg = styled.img`
  ${HomeContainer} & {
    width: 40%;
    max-width: 350px;
  }
  ${LogoContainer} & {
    width: 35px;
  }
`
